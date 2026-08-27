/* ==========================================================================
   HEEDS CERAMICS - INTERACTIVE JAVASCRIPT APPLICATION
   ========================================================================== */

// 1. PRODUCT CATALOG DATASET (With High-Res Catalog Images & Luxury Swatch Patterns)
const PRODUCTS_DATA = [
    {
        id: "tile-01",
        name: "Calacatta Gold Supreme",
        type: "floor",
        surface: "high-glossy",
        size: "60x120",
        usage: "residential",
        image: "images/tiles/tile_calacatta_gold_1787765983700.jpg",
        pattern: "linear-gradient(135deg, #FFFFFF 0%, #E8E6DF 40%, #D4AF37 80%, #FFFFFF 100%)",
        desc: "High-density glazed vitrified porcelain tile with gold-calacatta marble veining. Italian HD printing.",
        spec: "Thickness: 9mm | Water Absorption: <0.5% | Scratch Hardness: Mohs 7"
    },
    {
        id: "tile-02",
        name: "Emperador Dark Polish",
        type: "double-charge",
        surface: "polish",
        size: "80x80",
        usage: "commercial",
        image: "images/tiles/tile_emperador_dark_1787766007359.jpg",
        pattern: "linear-gradient(135deg, #1C1310 0%, #3D2B24 50%, #5E4338 100%)",
        desc: "Deep rich dark brown marble tile with crystal sheen finish. Ideal for luxury hotel lobbies and living halls.",
        spec: "Thickness: 10mm | Water Absorption: <0.05% | Heavy Traffic Rating"
    },
    {
        id: "tile-03",
        name: "Sapphire Blue Lappato",
        type: "homogeneous",
        surface: "lappato",
        size: "60x120",
        usage: "residential",
        image: "images/tiles/sapphire_blue.jpg",
        pattern: "linear-gradient(135deg, #081B33 0%, #153A66 50%, #D4AF37 90%)",
        desc: "Semi-polished lappato finish inspired by Mediterranean blue ocean stone with metallic gold accents.",
        spec: "Thickness: 9.5mm | Anti-skid Lappato Surface | Satin Touch"
    },
    {
        id: "tile-04",
        name: "Nordic Oak Timber",
        type: "floor",
        surface: "matt",
        size: "30x90",
        usage: "residential",
        image: "images/tiles/nordic_oak.jpg",
        pattern: "linear-gradient(90deg, #5C4127 0%, #8C6541 50%, #5C4127 100%)",
        desc: "Natural Scandinavian oak wood plank texture tile with 3D tactile grain feel. Warm earthy tone.",
        spec: "Thickness: 9mm | Slip Resistance: R10 | Natural Wood Grain Texture"
    },
    {
        id: "tile-05",
        name: "Diamond Glaze Pure White",
        type: "wall",
        surface: "diamond-glaze",
        size: "30x60",
        usage: "bathroom",
        image: "images/tiles/tile_diamond_white_1787766081120.jpg",
        pattern: "linear-gradient(135deg, #FFFFFF 0%, #F0F4F8 100%)",
        desc: "Ultra-bright reflective bathroom wall tile with micro-crystal protective glaze layer.",
        spec: "Thickness: 8mm | Stain Proof | Easy Clean Diamond Finish"
    },
    {
        id: "tile-06",
        name: "Crema Marfil Classic",
        type: "double-charge",
        surface: "high-glossy",
        size: "100x100",
        usage: "commercial",
        image: "images/tiles/tile_crema_marfil_1787766105747.jpg",
        pattern: "linear-gradient(135deg, #F5EFEB 0%, #E0D3C1 100%)",
        desc: "Jumbo format beige marble vitrified slab. Seamless floor look for grand reception halls.",
        spec: "Thickness: 11mm | Double Layered Vitrified Body | Stain Resistant"
    },
    {
        id: "tile-07",
        name: "Industrial Basalt Gray",
        type: "homogeneous",
        surface: "rustic",
        size: "60x60",
        usage: "exterior",
        image: "images/tiles/tile_basalt_gray_1787766267832.jpg",
        pattern: "linear-gradient(135deg, #2B3036 0%, #4D5561 100%)",
        desc: "Heavy-duty homogeneous volcanic basalt finish tile for high traffic parking, walkways & exterior facades.",
        spec: "Thickness: 12mm | High Impact Resistance | Non-slip Surface"
    },
    {
        id: "tile-08",
        name: "Panora Floral Decor Wall",
        type: "wall",
        surface: "high-glossy",
        size: "30x60",
        usage: "kitchen",
        image: "images/tiles/tile_panora_gold_1787766338372.jpg",
        pattern: "linear-gradient(135deg, #1A1A1A 0%, #CFA529 60%, #1A1A1A 100%)",
        desc: "Designer feature wall tile with metallic gold leaf botanical art for luxury kitchen splashbacks.",
        spec: "Thickness: 8.5mm | 3D Relief Gold Art | Water Repellent"
    },

    {
        id: "tile-08",
        name: "Panora Floral Decor Wall",
        type: "wall",
        surface: "high-glossy",
        size: "30x60",
        usage: "kitchen",
        image: "images/tiles/tile_panora_gold_1787766338372.jpg",
        pattern: "linear-gradient(135deg, #1A1A1A 0%, #CFA529 60%, #1A1A1A 100%)",
        desc: "Designer feature wall tile with metallic gold leaf botanical art for luxury kitchen splashbacks.",
        spec: "Thickness: 8.5mm | 3D Relief Gold Art | Water Repellent"
    }
];

// 1.1. ORBIT SANITARYWARE OFFICIAL PDF CATALOG PAGES DATASET (Exclusively for E-Brochure Section)
const ORBIT_PDF_PAGES = [
    { page: 1, title: "Marvello Close Coupled Water Closet", spec: "770x710x360 mm | Double Vortex 4.5/6.0L Flush | Soft Close", img: "images/sanitaryware/orbit_page_1.png" },
    { page: 2, title: "Marvello Wash Basin & Pedestal Set", spec: "565x475x870 mm | High Overflow Volume | Deep Bowl", img: "images/sanitaryware/orbit_page_2.png" },
    { page: 3, title: "Lusaro Close Coupled Water Closet", spec: "770x720x365 mm | Siphonic Double Vortex | 25% Water Saving", img: "images/sanitaryware/orbit_page_3.png" },
    { page: 4, title: "Lusaro Wash Basin (45cm) & Pedestal", spec: "460x370x860 mm | Compact Design | Anti-splash Rim", img: "images/sanitaryware/orbit_page_4.png" },
    { page: 5, title: "Arvento One Piece Water Closet", spec: "650x740x380 mm | One Piece Z-Flush | Noiseless Hinge", img: "images/sanitaryware/orbit_page_5.png" },
    { page: 6, title: "Arvento Wash Basin (55cm) & Pedestal", spec: "650x525x845 mm | 55cm Luxury Rim | Germ Resistant", img: "images/sanitaryware/orbit_page_6.png" },
    { page: 7, title: "Arvento Standard Wash Basin & Pedestal", spec: "650x500x840 mm | Standard Full Pedestal Set", img: "images/sanitaryware/orbit_page_7.png" },
    { page: 8, title: "Serenza Corner Wash Basin & Pedestal", spec: "400x385x835 mm | Space Saver Triangular Corner", img: "images/sanitaryware/orbit_page_8.png" },
    { page: 9, title: "Fiorenzo Wash Basin & Pedestal", spec: "580x450x700 mm | Curved Rim | Anti-stain Glaze", img: "images/sanitaryware/orbit_page_9.png" },
    { page: 10, title: "Cremona (Big) Wash Basin & Pedestal", spec: "620x485x730 mm | Jumbo Rectangular Format", img: "images/sanitaryware/orbit_page_10.png" },
    { page: 11, title: "Cremona (Small) Wash Basin & Pedestal", spec: "530x425x730 mm | Medium Format Basin", img: "images/sanitaryware/orbit_page_11.png" },
    { page: 12, title: "Lucano Wash Basin & Pedestal", spec: "600x470x880 mm | Ergonomic High Pedestal Profile", img: "images/sanitaryware/orbit_page_12.png" },
    { page: 13, title: "Asiaro 25 CM Water Closet Pan", spec: "560x410x250 mm | 25 CM Depth Squatting Pan", img: "images/sanitaryware/orbit_page_13.png" },
    { page: 14, title: "Asiaro 29 CM Water Closet Pan", spec: "575x470x280 mm | 29 CM Deep Bowl Squatting Pan", img: "images/sanitaryware/orbit_page_14.png" },
    { page: 15, title: "Serano Table Top Wash Basin (Round)", spec: "400x400x210 mm | Circular Vanity Countertop Vessel", img: "images/sanitaryware/orbit_page_15.png" },
    { page: 16, title: "Serano Table Top Wash Basin (Rectangular)", spec: "510x400x190 mm | Rectangular Vanity Countertop Vessel", img: "images/sanitaryware/orbit_page_16.png" }
];

// 2. SHOWROOM LOCATIONS DATASET
const SHOWROOMS_DATA = {
    dhaka: [
        {
            name: "Heeds Ceramics Industries Ltd - Corporate HQ",
            address: "House no: 03, Road no: 35, Sector 07, Uttara, Dhaka 1230",
            phone: "+8801907075173",
            hours: "9:00 AM - 8:00 PM (Sat - Thu)",
            mapsUrl: "https://maps.google.com"
        }
    ]
};

// Application State
let currentLang = 'en'; // 'en' or 'bn'
let activeType = 'all';
let selectedTileForVis = PRODUCTS_DATA[0];

// DOM Content Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    renderOrbitPdfGallery();
    initVisualizerSwatches();
    renderShowrooms();
    initStatsCounter();
    calculateTiles();
});

// 3. CATALOG RENDERING & FILTERING
function initCatalog() {
    renderCatalogGrid(PRODUCTS_DATA);
}

function renderOrbitPdfGallery() {
    const galleryContainer = document.getElementById('orbitPdfGalleryGrid');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = ORBIT_PDF_PAGES.map(p => `
        <div class="pdf-page-card" onclick="openPdfPreviewModal(${p.page})">
            <div class="pdf-page-img-wrapper">
                <img src="${p.img}" alt="${p.title}" class="pdf-page-img">
                <div class="pdf-page-overlay">
                    <span class="btn btn-pill-gold btn-sm"><i class="fa-solid fa-magnifying-glass-plus"></i> View Page ${p.page}</span>
                </div>
            </div>
            <div class="pdf-page-info">
                <span class="pdf-page-num">PAGE ${p.page} OF 16</span>
                <h4 class="pdf-page-title">${p.title}</h4>
                <p class="pdf-page-spec">${p.spec}</p>
            </div>
        </div>
    `).join('');
}

function openPdfPreviewModal(pageNumber) {
    const p = ORBIT_PDF_PAGES.find(item => item.page === pageNumber);
    if (!p) return;

    document.getElementById('pModalTitle').textContent = `Orbit Catalog Page ${p.page}: ${p.title}`;
    document.getElementById('pModalBody').innerHTML = `
        <div style="text-align:center;">
            <img src="${p.img}" alt="${p.title}" style="max-width:100%; max-height:70vh; border-radius:12px; border:2px solid var(--gold); box-shadow:0 10px 30px rgba(0,0,0,0.8); margin-bottom:16px;">
            <div style="display:flex; justify-content:center; gap:16px;">
                <a href="Orbit_Sanitaryware_Catalog.pdf" download="Orbit_Sanitaryware_Catalog.pdf" class="btn btn-pill-gold btn-lg">
                    <i class="fa-solid fa-download"></i> Download Complete 16-Page PDF Catalog (3.6 MB)
                </a>
            </div>
        </div>
    `;
    document.getElementById('productModal').classList.add('active');
}

function renderCatalogGrid(items) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--gold); margin-bottom: 16px;"></i>
                <h3>No matching tile collections found</h3>
                <p>Try resetting filters or searching with another keyword.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(item => `
        <div class="tile-card">
            <div class="tile-media">
                <img src="${item.image}" alt="${item.name}" class="tile-img">
                <span class="surface-tag">${item.surface.replace('-', ' ')}</span>
                <span class="size-tag">${item.size} CM</span>
            </div>
            <div class="tile-details">
                <div>
                    <h3 class="tile-name">${item.name}</h3>
                    <div class="tile-category">Category: ${item.type.toUpperCase()} | ${item.usage}</div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">${item.desc}</p>
                </div>
                <div class="tile-actions">
                    <button class="btn btn-pill-gold btn-sm btn-block" onclick="selectTileForVisualizer('${item.id}')">
                        <i class="fa-solid fa-eye"></i> Try in Visualizer
                    </button>
                    <button class="btn btn-pill-outline btn-sm" onclick="openProductModal('${item.id}')">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCatalog() {
    const searchVal = document.getElementById('catalogSearch').value.toLowerCase();
    const surfaceVal = document.getElementById('surfaceSelect').value;
    const sizeVal = document.getElementById('sizeSelect').value;
    const usageVal = document.getElementById('usageSelect').value;

    const filtered = PRODUCTS_DATA.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchVal) ||
                              item.desc.toLowerCase().includes(searchVal) ||
                              item.type.toLowerCase().includes(searchVal) ||
                              item.size.toLowerCase().includes(searchVal);
        
        const matchesType = activeType === 'all' || item.type === activeType;
        const matchesSurface = surfaceVal === 'all' || item.surface === surfaceVal;
        const matchesSize = sizeVal === 'all' || item.size === sizeVal;
        const matchesUsage = usageVal === 'all' || item.usage === usageVal;

        return matchesSearch && matchesType && matchesSurface && matchesSize && matchesUsage;
    });

    renderCatalogGrid(filtered);
}

function filterType(type) {
    activeType = type;
    document.querySelectorAll('#typeFilters .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-type') === type);
    });
    filterCatalog();
}

function resetFilters() {
    document.getElementById('catalogSearch').value = '';
    document.getElementById('surfaceSelect').value = 'all';
    document.getElementById('sizeSelect').value = 'all';
    document.getElementById('usageSelect').value = 'all';
    filterType('all');
}

// 4. AR ROOM VISUALIZER STUDIO ENGINE (Clean Gradient Swatches)
function initVisualizerSwatches() {
    const container = document.getElementById('visSwatches');
    if (!container) return;

    container.innerHTML = PRODUCTS_DATA.map((tile, idx) => `
        <div class="swatch-item ${idx === 0 ? 'active' : ''}" onclick="applyVisSwatch('${tile.id}', this)" title="${tile.name}">
            <div style="background: ${tile.pattern}; width:100%; height:100%; border-radius: 6px;"></div>
        </div>
    `).join('');

    if (PRODUCTS_DATA.length > 0) {
        applyVisSwatch(PRODUCTS_DATA[0].id, container.children[0]);
    }
}

function applyVisSwatch(tileId, element) {
    document.querySelectorAll('.swatch-item').forEach(s => s.classList.remove('active'));
    if (element) element.classList.add('active');

    const tile = PRODUCTS_DATA.find(t => t.id === tileId);
    if (!tile) return;

    selectedTileForVis = tile;

    // Update overlay & badge with clean gradient pattern
    const overlay = document.getElementById('visOverlay');
    const badgeName = document.getElementById('visBadgeName');
    const badgeSpecs = document.getElementById('visBadgeSpecs');
    const finishDisplay = document.getElementById('finishDisplay');
    const sizeDisplay = document.getElementById('sizeDisplay');

    if (overlay) {
        overlay.style.backgroundImage = 'none';
        overlay.style.background = tile.pattern;
        overlay.style.opacity = '0.42';
    }

    if (badgeName) badgeName.textContent = tile.name;
    if (badgeSpecs) badgeSpecs.textContent = `${tile.size} CM | ${tile.surface.toUpperCase()}`;
    if (finishDisplay) finishDisplay.textContent = tile.surface.toUpperCase();
    if (sizeDisplay) sizeDisplay.textContent = `${tile.size} CM`;
}

function switchVisRoom(roomType, btn) {
    document.querySelectorAll('.room-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const roomImg = document.getElementById('visBaseRoomImg');
    if (roomImg) {
        roomImg.style.filter = 'none';
        if (roomType === 'living') {
            roomImg.src = 'images/hero.jpg';
        } else if (roomType === 'bathroom') {
            roomImg.src = 'images/bathroom.jpg';
        } else if (roomType === 'bedroom') {
            roomImg.src = 'images/bedroom.jpg';
        } else if (roomType === 'kitchen') {
            roomImg.src = 'images/kitchen.jpg';
        }
    }
}

function setTilePattern(layoutStyle, btn) {
    document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const overlay = document.getElementById('visOverlay');
    if (!overlay) return;

    if (layoutStyle === 'diamond') {
        overlay.style.transform = 'rotate(45deg) scale(1.4)';
    } else if (layoutStyle === 'staggered') {
        overlay.style.transform = 'skewX(10deg)';
    } else {
        overlay.style.transform = 'none';
    }
}

function selectTileForVisualizer(tileId) {
    const tile = PRODUCTS_DATA.find(t => t.id === tileId);
    if (tile) {
        selectedTileForVis = tile;
        scrollToSection('visualizer');
        const swatchIdx = PRODUCTS_DATA.findIndex(t => t.id === tileId);
        const swatches = document.querySelectorAll('.swatch-item');
        if (swatches[swatchIdx]) {
            applyVisSwatch(tileId, swatches[swatchIdx]);
        }
    }
}

function captureVisualizer() {
    showToast(`Snapshot of ${selectedTileForVis.name} room design saved!`);
}

// 5. SHOWROOM FINDER RENDERING
function renderShowrooms() {
    const city = document.getElementById('citySelect').value;
    const listContainer = document.getElementById('showroomList');
    if (!listContainer) return;

    let items = [];
    if (city === 'all') {
        Object.values(SHOWROOMS_DATA).forEach(arr => items.push(...arr));
    } else {
        items = SHOWROOMS_DATA[city] || [];
    }

    listContainer.innerHTML = items.map((sr, idx) => `
        <div class="showroom-item ${idx === 0 ? 'active' : ''}" onclick="selectShowroom('${sr.name.replace(/'/g, "\\'")}', '${sr.address.replace(/'/g, "\\'")}', '${sr.phone}', this)">
            <h4>${sr.name}</h4>
            <p><i class="fa-solid fa-location-dot text-gold"></i> ${sr.address}</p>
        </div>
    `).join('');

    if (items.length > 0) {
        selectShowroom(items[0].name, items[0].address, items[0].phone, null);
    }
}

function selectShowroom(name, addr, phone, element) {
    if (element) {
        document.querySelectorAll('.showroom-item').forEach(i => i.classList.remove('active'));
        element.classList.add('active');
    }

    const titleEl = document.getElementById('mapCenterTitle');
    const addrEl = document.getElementById('mapCenterAddr');

    if (titleEl) titleEl.textContent = name;
    if (addrEl) addrEl.textContent = addr;
}

// 6. STATS COUNTER ANIMATION
function initStatsCounter() {
    const statElements = document.querySelectorAll('.stat-number');
    statElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Number.isInteger(target) ? Math.round(current) : current.toFixed(2);
        }, 30);
    });
}

// 7. TILE CALCULATOR LOGIC
function calculateTiles() {
    const length = parseFloat(document.getElementById('calcLength').value) || 0;
    const width = parseFloat(document.getElementById('calcWidth').value) || 0;
    const tileSizeSqm = parseFloat(document.getElementById('calcTileSize').value) || 0.36;

    const areaSqm = length * width;
    const areaSqft = areaSqm * 10.7639;

    // 10% Waste Factor
    const totalAreaWithWaste = areaSqm * 1.10;
    const totalTilesNeeded = Math.ceil(totalAreaWithWaste / tileSizeSqm);

    // Box counts (Assume avg 1.44 m2 per box)
    const boxesNeeded = Math.ceil(totalAreaWithWaste / 1.44);

    document.getElementById('resSqm').textContent = `${areaSqm.toFixed(2)} m²`;
    document.getElementById('resSqft').textContent = `(${areaSqft.toFixed(2)} sq ft)`;
    document.getElementById('resBoxes').textContent = `${boxesNeeded} Boxes`;
    document.getElementById('resTotalTiles').textContent = `${totalTilesNeeded} Total Tiles (+10% Waste)`;
}

// 8. LANGUAGE TOGGLE (EN / BN)
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    document.getElementById('currentLangLabel').textContent = currentLang === 'en' ? 'বাংলা' : 'English';

    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            el.textContent = text;
        }
    });
}

// 9. MODALS & NAVIGATION HELPERS
function openCalculatorModal() {
    document.getElementById('calculatorModal').classList.add('active');
}

function openBrochureModal() {
    document.getElementById('brochureModal').classList.add('active');
}

function openProductModal(tileId) {
    const tile = PRODUCTS_DATA.find(t => t.id === tileId);
    if (!tile) return;

    document.getElementById('pModalTitle').textContent = tile.name;
    document.getElementById('pModalBody').innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div style="background: url('${tile.image}') center/cover; height: 280px; border-radius: 12px; border: 1px solid var(--border-gold);"></div>
            <div>
                <span class="surface-tag" style="position:static; display:inline-block; margin-bottom:12px;">${tile.surface}</span>
                <h4 style="color:#FFF; font-size:1.4rem;">${tile.name}</h4>
                <p style="color:var(--gold); font-size:0.9rem; margin-bottom:16px;">Dimensions: ${tile.size} CM</p>
                <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:16px;">${tile.desc}</p>
                <div style="background:var(--bg-dark); padding:14px; border-radius:8px; border:1px solid var(--border-subtle); font-size:0.85rem;">
                    <strong style="color:#FFF; display:block; margin-bottom:4px;">Technical Specifications:</strong>
                    <span style="color:var(--text-muted);">${tile.spec}</span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('productModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    menu.classList.toggle('open');
    overlay.style.display = menu.classList.contains('open') ? 'block' : 'none';
}

function setActiveNav(element) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    showToast("Thank you! Your inquiry has been submitted to Akij Ceramics team.");
    event.target.reset();
}

function downloadBrochure(title) {
    showToast(`Downloading ${title} PDF...`);
    const link = document.createElement('a');
    link.href = 'Orbit_Sanitaryware_Catalog.pdf';
    link.download = 'Orbit_Sanitaryware_Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3500);
}
