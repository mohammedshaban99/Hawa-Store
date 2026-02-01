import { Component } from '@angular/core';

@Component({
  selector:    'app-learn-more',
  standalone:  true,
  imports:     [],
  templateUrl: './learnmore.html',
  styleUrls:   ['./learnmore.css']
})
export class LearnMoreComponent {

  /* ─── Stats ─── */
  stats = [
    { value: '2M+',   label: 'Happy Customers' },
    { value: '50K+',  label: 'Products'         },
    { value: '99%',   label: 'Satisfaction'     },
    { value: '24/7',  label: 'Support'          }
  ];

  /* ─── Features ─── */
  features = [
    {
      title: 'Curated Selection',
      description: 'Every product is hand-picked by our experts to guarantee top-tier quality and style that fits your lifestyle.',
      iconBg: 'rgba(56, 189, 248, 0.15)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
             </svg>`
    },
    {
      title: 'Lightning Fast Delivery',
      description: 'From warehouse to your doorstep in record time. Real-time tracking keeps you informed every step of the way.',
      iconBg: 'rgba(167, 139, 250, 0.15)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
             </svg>`
    },
    {
      title: 'Exclusive Members Deals',
      description: 'Unlock member-only discounts, early access to new arrivals, and special rewards every time you shop with us.',
      iconBg: 'rgba(244, 114, 182, 0.15)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
             </svg>`
    },
    {
      title: 'Sustainable & Ethical',
      description: 'We partner with brands that care. Every purchase supports fair trade, eco-friendly packaging, and responsible sourcing.',
      iconBg: 'rgba(74, 222, 128, 0.15)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22c-4 0-8-2.5-8-7 0-3 2-5 4-6-1-3 1-5 3-5 1 0 2 .5 2 .5S13.5 2 17 4c2 1 3 3 3 5 0 .5-.1 1-.2 1.5C22 11.5 22 14 20 16.5 19 18 16 22 12 22z"/>
             </svg>`
    },
    {
      title: 'Easy Returns & Refunds',
      description: 'Changed your mind? No problem. Our hassle-free 30-day return policy ensures you shop with zero risk.',
      iconBg: 'rgba(56, 189, 248, 0.15)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.99"/>
             </svg>`
    },
    {
      title: '24/7 Live Support',
      description: 'Questions? Our dedicated support team is always here — chat, email, or call anytime, day or night.',
      iconBg: 'rgba(167, 139, 250, 0.15)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
             </svg>`
    }
  ];

  /* ─── How It Works Steps ─── */
  steps = [
    {
      title: 'Browse & Discover',
      description: 'Explore thousands of curated products across every category. Use smart filters to find exactly what you need.'
    },
    {
      title: 'Add to Cart',
      description: 'Found something you love? Add it to your cart in one click. Compare products side by side before deciding.'
    },
    {
      title: 'Checkout Securely',
      description: 'Multiple payment options, encrypted checkout, and instant order confirmation. Safe and seamless every time.'
    },
    {
      title: 'Receive & Enjoy',
      description: 'Fast delivery straight to your door. Track your order in real time and enjoy your new purchase.'
    }
  ];

  /* ─── Testimonials ─── */
  testimonials = [
    {
      text: 'Absolutely love the quality of products here. Fast shipping and the packaging was beautiful. Will definitely shop again!',
      name: 'Sarah M.',
      role: 'Regular Customer'
    },
    {
      text: 'The customer support team helped me sort out an issue within minutes. Exceptional service and great selection of products.',
      name: 'James K.',
      role: 'VIP Member'
    },
    {
      text: 'Finally an online store that feels premium without the premium price. The curation here is top-notch. Truly impressed.',
      name: 'Nadia R.',
      role: 'New Customer'
    }
  ];

}
