  // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Navigation click handlers
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('href').substring(1);
                scrollToSection(section);
            });
        });

        // Animate mission/vision cards
        function animateCard(card) {
            card.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
        }

        // Product details
        function showProductDetails(product) {
            const messages = {
                maracuya: '🥭 ¡El maracuyá es perfecto para dar un toque tropical a tus preparaciones!',
                mora: '🫐 ¡La mora es ideal para postres y bebidas con su sabor dulce intenso!',
                mango: '🥭 ¡El mango aporta cremosidad y dulzura natural a todos tus platos!'
            };
            
            alert(messages[product] || '¡Descubre la frescura de nuestras pulpas naturales!');
        }

        // Form handling
        function handleSubmit(event) {
            event.preventDefault();
            
            // Simulate form processing
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('contactForm').reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            }, 1500);
        }

        // Social media links
        function openSocial(platform) {
            const messages = {
                facebook: '¡Síguenos en Facebook para más novedades!',
                instagram: '¡Síguenos en Instagram para ver nuestros productos!',
                whatsapp: '¡Contáctanos por WhatsApp: +57 300 123 4567!',
                linkedin: '¡Conéctate con nosotros en LinkedIn!',
                youtube: '¡Visita nuestro canal de YouTube!'
            };
            
            alert(messages[platform]);
        }

        // Parallax effect for floating fruits
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-fruit');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.mv-card, .product-card').forEach(card => {
                observer.observe(card);
            });
        });

        // Add hover effects to product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });