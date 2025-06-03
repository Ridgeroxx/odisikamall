// Product data - Replace with your actual products
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        description: "Advanced fitness tracking with heart rate monitor"
    },
    {
        id: 3,
        name: "Organic Coffee Beans",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop&crop=center",
        description: "Premium organic coffee beans, ethically sourced"
    },
    {
        id: 4,
        name: "Minimalist Backpack",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        description: "Sleek and functional backpack for daily use"
    },
    {
        id: 5,
        name: "Wireless Phone Charger",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1586953983027-d7508698d6b3?w=400&h=400&fit=crop&crop=center",
        description: "Fast wireless charging pad for all compatible devices"
    },
    {
        id: 6,
        name: "Bamboo Desk Organizer",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        description: "Eco-friendly bamboo desk organizer with multiple compartments"
    },
    {
        id: 7,
        name: "LED Strip Lights",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
        description: "RGB LED strip lights with remote control"
    },
    {
        id: 8,
        name: "Stainless Steel Water Bottle",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
        description: "Insulated water bottle keeps drinks cold for 24 hours"
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
        description: "Portable bluetooth speaker with premium sound quality"
    },
    {
        id: 10,
        name: "Plant-Based Protein Powder",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
        description: "Organic plant-based protein powder with natural flavors"
    },
    {
        id: 11,
        name: "Ergonomic Mouse Pad",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
        description: "Ergonomic mouse pad with wrist support for comfort"
    },
    {
        id: 12,
        name: "Ceramic Coffee Mug",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center",
        description: "Handcrafted ceramic coffee mug with unique design"
    },
    {
        id: 13,
        name: "Smartphone Camera Lens Kit",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&crop=center",
        description: "Professional camera lens kit for smartphone photography"
    },
    {
        id: 14,
        name: "Yoga Mat",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
        description: "Non-slip yoga mat with extra cushioning"
    },
    {
        id: 15,
        name: "Essential Oil Diffuser",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
        description: "Ultrasonic essential oil diffuser with LED lights"
    }
];

// Configuration
const config = {
    whatsappNumber: '+1234567890', // Replace with your WhatsApp number
    currency: '$',
    storeName: 'Premium Store'
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
        <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl animate-fade-in" 
             style="animation-delay: ${index * 0.1}s">
            <div class="product-image-container relative h-64 overflow-hidden">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image w-full h-full object-cover transition-transform duration-300"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x400/3b82f6/ffffff?text=Product+Image'">
                <div class="absolute top-4 right-4">
                    <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-sm font-semibold">
                        ${config.currency}${product.price}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-bold text-xl text-gray-800 mb-2 line-clamp-2">${product.name}</h3>
                <p class="text-gray-600 mb-4 text-sm line-clamp-2">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-primary-500">
                        ${config.currency}${product.price}
                    </span>
                    <button onclick="openPaymentModal(${product.id})" 
                            class="btn-primary bg-accent-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2">
                        <i class="fas fa-shopping-cart mr-2"></i>
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
    
    // Update modal content
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = `${config.currency}${product.price}`;
    
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
    return `Hi! I'm interested in ordering this product:

🛍️ *${product.name}*
💰 Price: ${config.currency}${product.price}

Please provide me with:
- Availability confirmation
- Delivery options and timeline
- Payment methods
- Final total including delivery

Thank you!`;
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
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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

// Make functions globally available
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.handleImageError = handleImageError;
