// Fungsi untuk toggle submenu
function toggleSubmenu(menuId) {
    const submenu = document.getElementById(menuId);
    const menuHeader = submenu.previousElementSibling;
    
    // Toggle class show pada submenu
    submenu.classList.toggle('show');
    
    // Toggle class active pada header menu
    menuHeader.classList.toggle('active');
    
    // Animasi smooth untuk icon
    const icon = menuHeader.querySelector('.toggle-icon');
    if (submenu.classList.contains('show')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Fungsi untuk membuka link dengan animasi
function openLink(url) {
    // Tambahkan efek loading
    const link = event.target;
    link.style.opacity = '0.7';
    link.style.transform = 'scale(0.95)';
    
    // Reset setelah delay singkat
    setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'scale(1)';
        window.open(url, '_blank');
    }, 150);
}

// Event listener untuk semua submenu item
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan event listener untuk semua link submenu
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Tambahkan efek visual saat diklik
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Tambahkan efek hover untuk menu header
    const menuHeaders = document.querySelectorAll('.menu-header');
    menuHeaders.forEach(header => {
        header.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        header.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Tambahkan smooth scroll untuk link WhatsApp
    const whatsappLink = document.querySelector('.whatsapp-link');
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            // Tambahkan efek visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    }
});

// Fungsi untuk menambahkan efek loading saat halaman dimuat
window.addEventListener('load', function() {
    // Tambahkan class loaded untuk animasi fade in
    document.body.classList.add('loaded');
    
    // Animasi untuk elemen header
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            header.style.transition = 'all 0.8s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animasi untuk menu sections
    const menuSections = document.querySelectorAll('.menu-section');
    menuSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 400 + (index * 100));
    });
    
    // Animasi untuk footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            footer.style.transition = 'all 0.8s ease';
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
        }, 600);
    }
});

// Tambahkan CSS untuk animasi fade in
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .header, .menu-section, .footer {
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(style);
