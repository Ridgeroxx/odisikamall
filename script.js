// Product data for Odisika Mall
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
        description: "High-quality wireless headphones with noise cancellation",
        details: {
            features: ["Active Noise Cancellation", "30-hour battery life", "Quick charge", "Bluetooth 5.0"],
            colors: ["Black", "White", "Silver"],
            warranty: "2 years international warranty"
        }
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        description: "Advanced fitness tracking with heart rate monitor",
        details: {
            features: ["Heart rate monitor", "GPS tracking", "Sleep analysis", "Water resistant"],
            colors: ["Black", "Rose Gold", "Silver"],
            sizes: ["38mm", "42mm"],
            warranty: "1 year manufacturer warranty"
        }
    },
    {
        id: 3,
        name: "Men's Running Shoes",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
        description: "Professional running shoes with advanced cushioning",
        details: {
            features: ["Air cushioning", "Breathable mesh", "Anti-slip sole", "Lightweight design"],
            colors: ["Black/White", "Blue/Gray", "Red/Black"],
            sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
            warranty: "6 months warranty"
        }
    },
    {
        id: 4,
        name: "Women's Casual T-Shirt",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
        description: "Comfortable cotton t-shirt for everyday wear",
        details: {
            features: ["100% cotton", "Machine washable", "Soft fabric", "Classic fit"],
            colors: ["White", "Black", "Pink", "Blue", "Gray"],
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            warranty: "30 days return policy"
        }
    },
    {
        id: 5,
        name: "Wireless Phone Charger",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1586953983027-d7508698d6b3?w=400&h=400&fit=crop&crop=center",
        description: "Fast wireless charging pad for all compatible devices",
        details: {
            features: ["15W fast charging", "LED indicator", "Universal compatibility", "Heat protection"],
            colors: ["Black", "White"],
            warranty: "1 year warranty"
        }
    },
    {
        id: 6,
        name: "Designer Sunglasses",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center",
        description: "UV protection sunglasses with polarized lenses",
        details: {
            features: ["UV400 protection", "Polarized lenses", "Anti-glare", "Lightweight frame"],
            colors: ["Black", "Brown", "Gold"],
            warranty: "1 year warranty"
        }
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
        description: "Portable bluetooth speaker with premium sound quality",
        details: {
            features: ["360° sound", "12-hour battery", "Water resistant", "Voice assistant"],
            colors: ["Black", "Blue", "Red"],
            warranty: "1 year warranty"
        }
    },
    {
        id: 8,
        name: "Leather Wallet",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        description: "Genuine leather wallet with RFID protection",
        details: {
            features: ["RFID blocking", "Genuine leather", "Multiple card slots", "Coin pocket"],
            colors: ["Brown", "Black", "Tan"],
            warranty: "6 months warranty"
        }
    },
    {
        id: 9,
        name: "Women's Dress Shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
        description: "Elegant dress shoes perfect for formal occasions",
        details: {
            features: ["Genuine leather", "Comfortable heel", "Non-slip sole", "Elegant design"],
            colors: ["Black", "Brown", "Navy"],
            sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8"],
            warranty: "6 months warranty"
        }
    },
    {
        id: 10,
        name: "Smart Phone Case",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&h=400&fit=crop&crop=center",
        description: "Protective phone case with card holder",
        details: {
            features: ["Drop protection", "Card slots", "Magnetic closure", "Camera protection"],
            colors: ["Black", "Brown", "Blue"],
            compatibility: ["iPhone 14", "iPhone 13", "Samsung Galaxy S23"],
            warranty: "3 months warranty"
        }
    },
    {
        id: 11,
        name: "Men's Polo Shirt",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop&crop=center",
        description: "Classic polo shirt made from premium cotton",
        details: {
            features: ["100% cotton", "Breathable fabric", "Classic collar", "Machine washable"],
            colors: ["Navy", "White", "Gray", "Green"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            warranty: "30 days return policy"
        }
    },
    {
        id: 12,
        name: "Ceramic Coffee Mug",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center",
        description: "Handcrafted ceramic coffee mug with unique design",
        details: {
            features: ["Handcrafted ceramic", "Heat resistant", "Dishwasher safe", "350ml capacity"],
            colors: ["White", "Blue", "Green"],
            warranty: "30 days return policy"
        }
    },
    {
        id: 13,
        name: "Wireless Earbuds",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop&crop=center",
        description: "True wireless earbuds with noise cancellation",
        details: {
            features: ["Active noise cancellation", "6-hour battery", "Touch controls", "Water resistant"],
            colors: ["White", "Black"],
            warranty: "1 year warranty"
        }
    },
    {
        id: 14,
        name: "Women's Handbag",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center",
        description: "Stylish handbag perfect for daily use",
        details: {
            features: ["Premium material", "Multiple compartments", "Adjustable strap", "Elegant design"],
            colors: ["Black", "Brown", "Beige"],
            warranty: "6 months warranty"
        }
    },
    {
        id: 15,
        name: "Gaming Mouse",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
        description: "High-precision gaming mouse with RGB lighting",
        details: {
            features: ["12000 DPI", "RGB lighting", "Programmable buttons", "Ergonomic design"],
            colors: ["Black", "White"],
            warranty: "2 years warranty"
        }
    }
];

// Configuration
const config = {
    whatsappNumber: '+233542676713', // Odisika Mall WhatsApp number
    currency: 'GH₵',
    storeName: 'Odisika Mall'
};

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const paymentModal = document.getElementById('payment-modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');
const whatsappButton = document.getElementById('whatsapp-button');
const loadingSpinner = document.getElementById('loading-spinner');

// Modal elements
const modalProductImage = document.getElementById('modal-product-image');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDescription = document.getElementById('modal-product-description');
const featuresList = document.getElementById('features-list');
const colorsSection = document.getElementById('colors-section');
const colorsList = document.getElementById('colors-list');
const sizesSection = document.getElementById('sizes-section');
const sizesList = document.getElementById('sizes-list');
const compatibilitySection = document.getElementById('compatibility-section');
const compatibilityList = document.getElementById('compatibility-list');
const warrantySection = document.getElementById('warranty-section');
const warrantyInfo = document.getElementById('warranty-info');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupIntersectionObserver();
    updateFooterWhatsApp();
});

// Render products in the grid
function renderProducts() {
    if (!productsGrid) return;
    
    const productHTML = products.map((product, index) => `
        <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl animate-fade-in group cursor-pointer" 
             style="animation-delay: ${index * 0.1}s"
             onclick="openPaymentModal(${product.id})">
            <div class="product-image-container relative h-64 overflow-hidden">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x400/3b82f6/ffffff?text=Product+Image'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 right-4">
                    <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-float">
                        ${config.currency}${product.price}
                    </span>
                </div>
                <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <span class="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                        ✨ Premium
                    </span>
                </div>
                <!-- Hover overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-110 group-hover:scale-100">
                    <div class="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl animate-bounce-gentle">
                        <i class="fas fa-eye text-primary-500 text-xl"></i>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-bold text-xl text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">${product.name}</h3>
                <p class="text-gray-600 mb-4 text-sm line-clamp-2">${product.description}</p>
                ${product.details && product.details.colors ? `
                <div class="mb-3">
                    <div class="flex gap-1">
                        ${product.details.colors.slice(0, 3).map(color => `
                            <div class="w-4 h-4 rounded-full border-2 border-white shadow-sm" 
                                 style="background: ${getColorHex(color)}"
                                 title="${color}"></div>
                        `).join('')}
                        ${product.details.colors.length > 3 ? `<span class="text-xs text-gray-500 ml-1">+${product.details.colors.length - 3}</span>` : ''}
                    </div>
                </div>
                ` : ''}
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-primary-500 group-hover:text-accent-500 transition-colors duration-300">
                        ${config.currency}${product.price}
                    </span>
                    <button onclick="event.stopPropagation(); openPaymentModal(${product.id})" 
                            class="btn-primary bg-accent-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 animate-glow">
                        <i class="fas fa-shopping-cart mr-2 animate-wiggle"></i>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    productsGrid.innerHTML = productHTML;
}

// Open payment modal
function openPaymentModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Update basic product info
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = `${config.currency}${product.price}`;
    
    // Populate features
    if (product.details && product.details.features) {
        featuresList.innerHTML = product.details.features.map(feature => 
            `<li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i>${feature}</li>`
        ).join('');
    }
    
    // Show/hide and populate colors
    if (product.details && product.details.colors && product.details.colors.length > 0) {
        colorsSection.classList.remove('hidden');
        colorsList.innerHTML = product.details.colors.map(color => 
            `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${color}</span>`
        ).join('');
    } else {
        colorsSection.classList.add('hidden');
    }
    
    // Show/hide and populate sizes
    if (product.details && product.details.sizes && product.details.sizes.length > 0) {
        sizesSection.classList.remove('hidden');
        sizesList.innerHTML = product.details.sizes.map(size => 
            `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${size}</span>`
        ).join('');
    } else {
        sizesSection.classList.add('hidden');
    }
    
    // Show/hide and populate compatibility
    if (product.details && product.details.compatibility && product.details.compatibility.length > 0) {
        compatibilitySection.classList.remove('hidden');
        compatibilityList.innerHTML = product.details.compatibility.map(device => 
            `<span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">${device}</span>`
        ).join('');
    } else {
        compatibilitySection.classList.add('hidden');
    }
    
    // Show/hide and populate warranty
    if (product.details && product.details.warranty) {
        warrantySection.classList.remove('hidden');
        warrantyInfo.textContent = product.details.warranty;
    } else {
        warrantySection.classList.add('hidden');
    }
    
    // Generate WhatsApp message
    const message = generateWhatsAppMessage(product);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    whatsappButton.href = whatsappUrl;
    
    // Show modal with animation
    paymentModal.classList.remove('hidden');
    paymentModal.classList.add('modal-show');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    setTimeout(() => {
        closeModalBtn.focus();
    }, 300);
}

// Close payment modal
function closePaymentModal() {
    paymentModal.classList.remove('modal-show');
    
    // Hide modal after animation
    setTimeout(() => {
        paymentModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Generate WhatsApp message
function generateWhatsAppMessage(product) {
    let message = `Hi! I'm interested in ordering this product from Odisika Mall:

🛍️ *${product.name}*
💰 Price: ${config.currency}${product.price}`;

    // Add product details if available
    if (product.details) {
        if (product.details.colors && product.details.colors.length > 0) {
            message += `\n🎨 Available Colors: ${product.details.colors.join(', ')}`;
        }
        
        if (product.details.sizes && product.details.sizes.length > 0) {
            message += `\n📏 Available Sizes: ${product.details.sizes.join(', ')}`;
        }
        
        if (product.details.compatibility && product.details.compatibility.length > 0) {
            message += `\n📱 Compatible with: ${product.details.compatibility.join(', ')}`;
        }
    }

    message += `

Please provide me with:
- Availability confirmation
- My preferred color/size (if applicable)
- Delivery options and timeline to my location in Ghana
- Payment methods accepted
- Final total including delivery costs

Thank you!`;

    return message;
}

// Setup event listeners
function setupEventListeners() {
    // Modal close events
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closePaymentModal);
    }
    
    // Close modal when clicking outside
    if (paymentModal) {
        paymentModal.addEventListener('click', function(e) {
            if (e.target === paymentModal) {
                closePaymentModal();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !paymentModal.classList.contains('hidden')) {
            closePaymentModal();
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add click tracking for analytics (if needed)
    document.querySelectorAll('[data-track]').forEach(element => {
        element.addEventListener('click', function() {
            const action = this.getAttribute('data-track');
            // You can add analytics tracking here
            console.log('Tracked action:', action);
        });
    });
}

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

// Update footer WhatsApp link
function updateFooterWhatsApp() {
    const footerWhatsApp = document.getElementById('footer-whatsapp');
    if (footerWhatsApp) {
        const message = `Hi! I found your store and I'm interested in your products. Could you please help me with more information?`;
        const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
        footerWhatsApp.href = whatsappUrl;
    }
}

// Utility functions
function showLoading() {
    if (loadingSpinner) {
        loadingSpinner.classList.remove('hidden');
    }
}

function hideLoading() {
    if (loadingSpinner) {
        loadingSpinner.classList.add('hidden');
    }
}

// Handle image loading errors
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/400x400/3b82f6/ffffff?text=Product+Image';
    img.alt = 'Product image not available';
}

// Add to cart functionality (for future enhancement)
function addToCart(productId) {
    // This can be enhanced to add products to a cart
    console.log('Added product to cart:', productId);
}

// Search functionality (for future enhancement)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    return filteredProducts;
}

// Sort products functionality (for future enhancement)
function sortProducts(criteria) {
    let sortedProducts = [...products];
    
    switch(criteria) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    return sortedProducts;
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // You can add error reporting here
});

// Service worker registration (for future PWA enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker can be added here for offline functionality
    });
}

// Analytics tracking (placeholder for future enhancement)
function trackEvent(action, category, label) {
    // Google Analytics or other tracking can be added here
    console.log('Event tracked:', { action, category, label });
}

// Utility function to get color hex codes
function getColorHex(colorName) {
    const colorMap = {
        'Black': '#000000',
        'White': '#FFFFFF',
        'Silver': '#C0C0C0',
        'Gold': '#FFD700',
        'Brown': '#8B4513',
        'Navy': '#000080',
        'Blue': '#0000FF',
        'Red': '#FF0000',
        'Green': '#008000',
        'Pink': '#FFC0CB',
        'Gray': '#808080',
        'Grey': '#808080',
        'Rose Gold': '#E8B4B8',
        'Beige': '#F5F5DC',
        'Tan': '#D2B48C',
        'Yellow': '#FFFF00',
        'Purple': '#800080',
        'Orange': '#FFA500'
    };
    
    // Try to match the color name, fallback to a default color
    const normalizedColor = colorName.split('/')[0].trim(); // Handle "Black/White" format
    return colorMap[normalizedColor] || '#6B7280'; // Default to gray
}

// Make functions globally available
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.handleImageError = handleImageError;
window.getColorHex = getColorHex;
