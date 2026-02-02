# Hawa Store

A modern e-commerce web application built with Angular 21. A full-featured online shopping platform that allows customers to browse products, filter by category, search for items, manage a shopping cart, and handle user authentication.

## Features

- **Product Catalog** - Browse products with real-time filtering by category and keyword search
- **Shopping Cart** - Add/remove products, adjust quantities, view totals with shipping
- **User Authentication** - Login and registration with token-based authentication
- **Responsive Design** - Mobile-friendly UI with Bootstrap and Tailwind CSS

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Angular 21.1.1 |
| Language | TypeScript 5.9.2 |
| Styling | Bootstrap 5.3.8, Tailwind CSS 4.1.18 |
| Icons | Bootstrap Icons 1.13.1 |
| State | Angular Signals, RxJS 7.8.0 |
| UI Components | ngx-spinner, ngx-toastr |
| Testing | Vitest 4.0.8 |
| API | FakeStore API |

## Project Structure

```
src/app/
├── components/          # UI Components
│   ├── home/           # Landing page with product catalog
│   ├── header/         # Navigation & search
│   ├── footer/         # Footer
│   ├── cart/           # Shopping cart sidebar
│   ├── products/       # Product listing & filtering
│   ├── login/          # Login form
│   ├── register/       # Registration form
│   ├── aboutus/        # About Us page
│   ├── contactus/      # Contact Us page
│   └── notfound/       # 404 error page
├── services/           # Business logic & API calls
├── models/             # TypeScript interfaces
├── guards/             # Route protection
├── interceptors/       # HTTP interceptors
└── enums/              # TypeScript enumerations
```

## Getting Started

### Prerequisites

- Node.js (npm 11.6.2 or higher)
- Angular CLI 21.1.1

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build with watch mode |
| `npm test` | Run unit tests |

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home - Product catalog |
| `/login` | User login |
| `/register` | User registration |
| `/about-us` | About the store |
| `/contact-us` | Contact form |
| `/learn-more` | Additional information |

## Services

| Service | Purpose |
|---------|---------|
| ProductService | Product data, filtering, and search |
| CategoryService | Product categories |
| CartService | Shopping cart operations |
| AuthService | User authentication |
| UserService | User registration and profiles |

## API

This application uses the [FakeStore API](https://fakestoreapi.com) for product and authentication data.

## License

This project is private.
