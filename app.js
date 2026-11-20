/**
 * =========================================================================
 * PRO TOOLS AI (proaitools.shop) - CORE APPLICATION CONTROLLER
 * High-performance Vanilla JS + GSAP + Canvas Engine
 * =========================================================================
 */

(function () {
  'use strict';

  // State Management
  const state = {
    selectedCategory: 'all',
    searchQuery: '',
    sortBy: 'popular',
    currentModalTool: null,
    isLightMode: false
  };

  // DOM Elements Cache
  const elements = {
    productsGrid: document.getElementById('productsGrid'),
    categoryFilters: document.getElementById('categoryFilters'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    sortSelect: document.getElementById('sortSelect'),
    resultsCount: document.getElementById('resultsCount'),
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewContent: document.getElementById('quickViewContent'),
    orderModal: document.getElementById('orderModal'),
    orderModalContent: document.getElementById('orderModalContent'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    faqAccordion: document.getElementById('faqAccordion'),
    testimonialsMarquee: document.getElementById('testimonialsMarquee'),
    toastContainer: document.getElementById('toastContainer'),
    heroCanvas: document.getElementById('heroCanvas')
  };

  // =========================================================================
  // 1. INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCanvas();
    renderCategories();
    renderProducts();
    renderTestimonials();
    renderFaqs();
    initEventListeners();
    initScrollAnimations();
    initCounters();
  });

  // =========================================================================
  // 2. THEME MANAGER (DARK / LIGHT MODE)
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('protools_theme');
    if (savedTheme === 'light') {
      state.isLightMode = true;
      document.documentElement.classList.add('light-mode');
      updateThemeToggleIcon(true);
    } else {
      state.isLightMode = false;
      document.documentElement.classList.remove('light-mode');
      updateThemeToggleIcon(false);
    }
  }

  function toggleTheme() {
    state.isLightMode = !state.isLightMode;
    if (state.isLightMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('protools_theme', 'light');
      updateThemeToggleIcon(true);
      showToast('Switched to Clean Light Mode ☀️');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('protools_theme', 'dark');
      updateThemeToggleIcon(false);
      showToast('Switched to Obsidian Dark Mode 🌙');
    }
  }

  function updateThemeToggleIcon(isLight) {
    if (!elements.themeToggleBtn) return;
    elements.themeToggleBtn.innerHTML = isLight
      ? `<svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
      : `<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
  }

  // =========================================================================
  // 3. INTERACTIVE HERO CANVAS (CYBER NEURAL MESH)
  // =========================================================================
  function initCanvas() {
    const canvas = elements.heroCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 45;

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#38BDF8' : '#818CF8';
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between adjacent particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#38BDF8';
            ctx.globalAlpha = (1 - dist / 110) * 0.22;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }
    animate();
  }

  // =========================================================================
  // 4. CATEGORIES RENDERING & FILTERING
  // =========================================================================
  function renderCategories() {
    if (!elements.categoryFilters) return;
    const categories = window.CATEGORIES || [];
    
    elements.categoryFilters.innerHTML = categories.map(cat => {
      const isActive = cat.id === state.selectedCategory;
      return `
        <button 
          data-category="${cat.id}"
          class="filter-pill flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all border ${
            isActive 
              ? 'active text-white' 
              : 'border-slate-800/80 bg-slate-900/60 text-slate-300'
          }"
        >
          <span>${cat.label}</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] bg-white/10 font-mono">${cat.count}</span>
        </button>
      `;
    }).join('');

    // Attach click events
    elements.categoryFilters.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.dataset.category;
        renderCategories();
        renderProducts();
      });
    });
  }

  // =========================================================================
  // 5. PRODUCTS RENDERING & SEARCH ENGINE
  // =========================================================================
  function getFilteredProducts() {
    let list = [...(window.PRODUCTS_DATA || [])];

    // Filter by Category
    if (state.selectedCategory !== 'all') {
      list = list.filter(item => item.category === state.selectedCategory);
    }

    // Filter by Search
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.features.some(f => f.toLowerCase().includes(q))
      );
    }

    // Sort
    switch (state.sortBy) {
      case 'title-asc':
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
        list.sort((a, b) => (b.badgeType === 'hot' ? 1 : 0) - (a.badgeType === 'hot' ? 1 : 0));
        break;
      default: // popular
        list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return list;
  }

  function renderProducts() {
    if (!elements.productsGrid) return;
    const products = getFilteredProducts();

    // Update count display
    if (elements.resultsCount) {
      elements.resultsCount.innerText = `${products.length} tool${products.length === 1 ? '' : 's'} available`;
    }

    // Empty State
    if (products.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="col-span-full py-20 text-center glass-panel rounded-2xl p-8 border border-dashed border-slate-800">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-slate-200 mb-2">No tools found</h3>
          <p class="text-sm text-slate-400 max-w-md mx-auto mb-6">We couldn't find any tools matching "${state.searchQuery}". Try browsing by category or reset your search.</p>
          <button id="resetSearchBtn" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 hover:scale-105 transition-all">
            Reset Filters & View All
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('resetSearchBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.searchQuery = '';
          state.selectedCategory = 'all';
          if (elements.searchInput) elements.searchInput.value = '';
          renderCategories();
          renderProducts();
        });
      }
      return;
    }

    // Render Cards with 50% TO 90% OFF and Professional Hover Colors
    elements.productsGrid.innerHTML = products.map((tool, idx) => {
      return `
        <div 
          class="glass-panel animated-border tilt-card rounded-2xl p-6 flex flex-col justify-between relative group" 
          data-id="${tool.id}"
          style="animation-delay: ${idx * 40}ms"
        >
          <div class="tilt-inner">
            <!-- Card Header: Brand Icon & Badges -->
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="tool-icon-box w-14 h-14 rounded-2xl p-2.5 bg-slate-900/90 border border-slate-800 flex items-center justify-center shadow-inner">
                ${tool.logoSvg}
              </div>
              <div class="flex flex-col items-end gap-1.5">
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider badge-${tool.badgeType || 'hot'}">
                  ${tool.badge}
                </span>
                <span class="text-[10px] font-black tracking-wide text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 shadow-sm">
                  50% TO 90% OFF
                </span>
              </div>
            </div>

            <!-- Title & Rating -->
            <div class="mb-3">
              <div class="flex items-center gap-1.5 text-xs text-amber-400 mb-1">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span class="font-bold">${tool.rating}</span>
                <span class="text-slate-400 text-[11px]">(${tool.reviewsCount})</span>
                <span class="mx-1 text-slate-700">•</span>
                <span class="text-slate-400 text-[11px] font-medium">${tool.period}</span>
              </div>
              <h3 class="tool-card-title text-lg font-bold text-slate-100 line-clamp-1">
                ${tool.title}
              </h3>
            </div>

            <!-- Short Description -->
            <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              ${tool.shortDesc}
            </p>

            <!-- Key Features (Top 3) -->
            <ul class="space-y-1.5 mb-6 text-xs text-slate-300">
              ${tool.features.slice(0, 3).map(f => `
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  <span class="line-clamp-1">${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- 50% TO 90% OFF Banner & Action Footer -->
          <div class="pt-4 border-t border-slate-800/80">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-0.5">Special Promo</div>
                <div class="text-xl sm:text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 flex items-center gap-1.5">
                  50% TO 90% OFF
                </div>
                <span class="text-[11px] text-slate-400 font-medium">${tool.period} &bull; Wholesale Price</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-400 font-mono bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm shadow-emerald-500/10">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Deal
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button 
                class="quick-view-btn px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-sm transition-all text-center"
                data-id="${tool.id}"
              >
                Quick View
              </button>
              <button 
                class="order-now-btn magnetic-btn px-3 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-1.5"
                data-id="${tool.id}"
              >
                <span>Order Now</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Reattach listeners & tilt
    attachCardListeners();
    initTilt();
  }

  // =========================================================================
  // 6. 3D TILT MICRO-INTERACTION
  // =========================================================================
  function initTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.012, 1.012, 1.012)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // =========================================================================
  // 7. CARD LISTENERS & MODAL MANAGEMENT
  // =========================================================================
  function attachCardListeners() {
    // Quick View buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const toolId = btn.dataset.id;
        openQuickViewModal(toolId);
      });
    });

    // Order Now buttons
    document.querySelectorAll('.order-now-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const toolId = btn.dataset.id;
        handleOrderTrigger(toolId);
      });
    });
  }

  function openQuickViewModal(toolId) {
    const tool = (window.PRODUCTS_DATA || []).find(p => p.id === toolId);
    if (!tool || !elements.quickViewModal || !elements.quickViewContent) return;
    state.currentModalTool = tool;

    elements.quickViewContent.innerHTML = `
      <div class="p-6 md:p-8">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 mb-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-2xl p-3 bg-slate-900 border border-slate-700/80 flex items-center justify-center">
              ${tool.logoSvg}
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full badge-${tool.badgeType || 'hot'}">
                  ${tool.badge}
                </span>
                <span class="text-xs text-emerald-300 font-extrabold bg-emerald-950/80 px-3 py-0.5 rounded-full border border-emerald-500/40">
                  50% TO 90% OFF
                </span>
              </div>
              <h2 class="text-xl md:text-2xl font-bold text-white font-display">${tool.title}</h2>
            </div>
          </div>
          <button id="closeQuickViewBtn" class="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Description -->
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          ${tool.shortDesc}
        </p>

        <!-- Plans & Periods -->
        <div class="mb-6">
          <label class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Choose Validity Plan:</label>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            ${(tool.altPeriods || [{ label: tool.period, price: tool.price }]).map((p, i) => `
              <div class="p-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/60 cursor-pointer transition-all ${i === 0 ? 'ring-1 ring-sky-500 border-sky-500 bg-sky-950/20' : ''}">
                <div class="text-xs text-slate-400 font-medium">${p.label}</div>
                <div class="text-base font-black text-emerald-400 font-display">50% TO 90% OFF</div>
                <div class="text-[10px] text-slate-400">Wholesale Guaranteed</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Feature Specs -->
        <div class="mb-6">
          <label class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">What's Included & Specifications:</label>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            ${tool.features.map(f => `
              <div class="flex items-center gap-2.5 text-xs text-slate-200 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Trust Badges Bar -->
        <div class="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 text-center text-xs">
          <div>
            <span class="text-slate-400 block text-[10px]">Activation</span>
            <span class="text-sky-400 font-bold">5-15 Minutes</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px]">Warranty</span>
            <span class="text-emerald-400 font-bold">Full Replacement</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px]">Access Type</span>
            <span class="text-purple-400 font-bold">100% Genuine</span>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div>
            <span class="text-xs text-slate-400 block uppercase tracking-wider font-semibold">Wholesale Discount:</span>
            <span class="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 font-display">
              50% TO 90% OFF
            </span>
            <span class="block text-[11px] text-slate-400">Lowest Market Rate Guaranteed</span>
          </div>
          <button 
            id="modalOrderNowBtn"
            class="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Order Now / Get Access</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    `;

    elements.quickViewModal.classList.add('active');

    // Close listener
    document.getElementById('closeQuickViewBtn').addEventListener('click', () => {
      elements.quickViewModal.classList.remove('active');
    });

    // Order Now inside modal
    document.getElementById('modalOrderNowBtn').addEventListener('click', () => {
      elements.quickViewModal.classList.remove('active');
      handleOrderTrigger(tool.id);
    });
  }

  // =========================================================================
  // 8. ORDER HANDLER (STRICT COMPLIANCE WITH CONFIG RULE)
  // =========================================================================
  function handleOrderTrigger(toolId) {
    const tool = (window.PRODUCTS_DATA || []).find(p => p.id === toolId);
    if (!tool) return;

    const whatsappNumber = (window.SITE_CONFIG && window.SITE_CONFIG.WHATSAPP_NUMBER) || "";

    // If a phone number is configured, open WhatsApp
    if (whatsappNumber && whatsappNumber.trim() !== "") {
      const msg = window.SITE_CONFIG.orderMessageTemplate(tool.title, "50% TO 90% OFF", tool.period);
      window.open(`https://wa.me/${whatsappNumber.trim()}?text=${msg}`, '_blank');
      return;
    }

    // STRICT EXCLUSION: If WHATSAPP_NUMBER is empty, show modern setup modal
    openOrderSetupModal(tool);
  }

  function openOrderSetupModal(tool) {
    if (!elements.orderModal || !elements.orderModalContent) return;

    elements.orderModalContent.innerHTML = `
      <div class="p-6 md:p-8 text-center">
        <!-- Icon -->
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>

        <!-- Heading -->
        <h3 class="text-2xl font-bold text-white font-display mb-2">Checkout Channel Ready</h3>
        <p class="text-sm text-slate-300 max-w-sm mx-auto mb-6">
          You selected <strong class="text-sky-300 font-semibold">${tool.title}</strong> at <span class="text-emerald-400 font-bold">50% TO 90% OFF</span> (${tool.period} Wholesale Access).
        </p>

        <!-- Order Summary Box -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-6 text-left text-xs font-mono space-y-2">
          <div class="flex justify-between text-slate-400">
            <span>Domain:</span>
            <span class="text-slate-200">proaitools.shop</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Tool:</span>
            <span class="text-sky-300 font-bold">${tool.title}</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Plan Duration:</span>
            <span class="text-slate-200">${tool.period}</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Wholesale Discount:</span>
            <span class="text-emerald-400 font-bold">50% TO 90% OFF</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Rate Guarantee:</span>
            <span class="text-sky-300 font-bold">Lowest Market Price</span>
          </div>
          <div class="flex justify-between text-slate-400">
            <span>Warranty:</span>
            <span class="text-slate-200">100% Full Replacement</span>
          </div>
        </div>

        <!-- Informative Setup Note -->
        <div class="p-3 rounded-xl bg-sky-950/40 border border-sky-800/60 text-left text-xs text-sky-200/90 mb-6 flex items-start gap-3">
          <svg class="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="font-bold text-sky-300 block mb-0.5">Admin Notice / Ready for Connection:</strong>
            The live WhatsApp checkout is configured in <code class="bg-black/40 px-1 py-0.5 rounded text-sky-300">siteConfig.js</code>. Add your phone number to <code class="bg-black/40 px-1 py-0.5 rounded text-sky-300">WHATSAPP_NUMBER</code> to launch direct WhatsApp orders!
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            id="copyOrderSummaryBtn"
            class="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
            <span>Copy Order Details</span>
          </button>
          <button 
            id="closeOrderModalBtn"
            class="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:scale-105 transition-all"
          >
            Got It, Close
          </button>
        </div>
      </div>
    `;

    elements.orderModal.classList.add('active');

    // Close button
    document.getElementById('closeOrderModalBtn').addEventListener('click', () => {
      elements.orderModal.classList.remove('active');
    });

    // Copy order button
    document.getElementById('copyOrderSummaryBtn').addEventListener('click', () => {
      const summaryText = `Tool: ${tool.title}\nOffer: 50% TO 90% OFF (Wholesale Rate)\nDuration: ${tool.period}\nDomain: proaitools.shop`;
      navigator.clipboard.writeText(summaryText).then(() => {
        showToast('Order details copied to clipboard! 📋');
      }).catch(() => {
        showToast('Order details ready!');
      });
    });
  }

  // =========================================================================
  // 9. TESTIMONIALS & MARQUEE
  // =========================================================================
  function renderTestimonials() {
    if (!elements.testimonialsMarquee) return;
    const testimonials = window.TESTIMONIALS || [];
    
    // Duplicate array to achieve seamless loop
    const fullList = [...testimonials, ...testimonials];

    elements.testimonialsMarquee.innerHTML = fullList.map(item => `
      <div class="glass-panel rounded-2xl p-6 w-80 md:w-96 flex-shrink-0 flex flex-col justify-between border border-slate-800/80">
        <div>
          <!-- Rating & Tool Tag -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex text-amber-400">
              ${Array(item.rating).fill('<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
            </div>
            <span class="text-[10px] font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/50 px-2 py-0.5 rounded-full">
              ${item.tool}
            </span>
          </div>
          <!-- Review text -->
          <p class="text-xs text-slate-300 leading-relaxed mb-4 italic">
            "${item.text}"
          </p>
        </div>
        <!-- Author Profile -->
        <div class="flex items-center gap-3 pt-3 border-t border-slate-800/60">
          <img src="${item.avatar}" alt="${item.name}" class="w-9 h-9 rounded-full object-cover border border-sky-500/40" />
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold text-white">${item.name}</span>
              ${item.verified ? '<svg class="w-3.5 h-3.5 text-sky-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>' : ''}
            </div>
            <span class="text-[10px] text-slate-400 block">${item.role}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 10. FAQS ACCORDION
  // =========================================================================
  function renderFaqs() {
    if (!elements.faqAccordion) return;
    const faqs = window.FAQS || [];

    elements.faqAccordion.innerHTML = faqs.map((faq, i) => `
      <div class="accordion-item glass-panel rounded-2xl border border-slate-800/80 overflow-hidden mb-3.5 transition-all">
        <button class="accordion-trigger w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 font-bold text-sm md:text-base text-slate-100 hover:text-sky-300 transition-colors">
          <span>${faq.question}</span>
          <svg class="accordion-icon w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="accordion-content px-6 pb-5 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-3">
          ${faq.answer}
        </div>
      </div>
    `).join('');

    // Toggle logic
    elements.faqAccordion.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const isOpen = item.classList.contains('open');

        // Close other items
        elements.faqAccordion.querySelectorAll('.accordion-item').forEach(other => {
          if (other !== item) other.classList.remove('open');
        });

        if (isOpen) {
          item.classList.remove('open');
        } else {
          item.classList.add('open');
        }
      });
    });
  }

  // =========================================================================
  // 11. EVENT LISTENERS (SEARCH, SORT, MODALS)
  // =========================================================================
  function initEventListeners() {
    // Theme toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Live Search
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (elements.searchClearBtn) {
          elements.searchClearBtn.classList.toggle('hidden', state.searchQuery === '');
        }
        renderProducts();
      });
    }

    // Clear Search button
    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener('click', () => {
        state.searchQuery = '';
        if (elements.searchInput) elements.searchInput.value = '';
        elements.searchClearBtn.classList.add('hidden');
        renderProducts();
      });
    }

    // Sort select
    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    // Close modals on overlay backdrop click
    [elements.quickViewModal, elements.orderModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('active');
          }
        });
      }
    });

    // Escape key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.quickViewModal) elements.quickViewModal.classList.remove('active');
        if (elements.orderModal) elements.orderModal.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // 12. TOAST NOTIFICATION SYSTEM
  // =========================================================================
  function showToast(message) {
    let container = elements.toastContainer;
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
      elements.toastContainer = container;
    }

    const toast = document.createElement('div');
    toast.className = 'glass-panel px-4 py-3 rounded-xl border border-sky-500/40 shadow-xl shadow-sky-500/10 text-xs md:text-sm font-semibold text-white flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto';
    toast.innerHTML = `
      <div class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></div>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Fade in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    });

    // Auto remove after 3.5s
    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // =========================================================================
  // 13. STATS NUMBER COUNTERS
  // =========================================================================
  function initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          const suffix = el.dataset.suffix || '';
          let count = 0;
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              el.innerText = target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              el.innerText = Math.floor(count).toLocaleString() + suffix;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }

  // =========================================================================
  // 14. GSAP & SCROLL ENHANCEMENTS
  // =========================================================================
  function initScrollAnimations() {
    if (typeof gsap !== 'undefined') {
      gsap.from('.hero-headline', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-cta-box', { opacity: 0, y: 20, duration: 1, delay: 0.4, ease: 'power3.out' });
      gsap.from('.hero-floating-badge', { opacity: 0, scale: 0.8, stagger: 0.2, duration: 1.2, delay: 0.3, ease: 'elastic.out(1, 0.5)' });
    }
  }

})();
