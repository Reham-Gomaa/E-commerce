# 🛍️ Angular E-Commerce Platform

---

## 📝 Project Overview

**Products Gallery** is a modern e-commerce SPA built with Angular, featuring:

- **Real-world shopping experience** with product browsing, search, and cart functionality
- **Optimized performance** through lazy loading and efficient state management
- **Clean UI** built with Tailwind CSS for full responsiveness
- **Modular architecture** using Angular's standalone components
- **Robust API integration** with error handling and loading states

Key user flows:

1. Browse products with search/sort filters
2. View product details with images and ratings

## 🌟 Features

- **Product Catalog** with categories and search
- **Responsive Design** for all devices
- **Product Details** with ratings and descriptions
- **Sorting & Filtering** options
- **Performance Optimized** with lazy loading

## 🛠️ Technologies Used

- **Frontend**: Angular 16, Tailwind CSS
- **State Management**: RxJS, Services
- **API Integration**: HTTP Client
- **UI Components**: Standalone Components
- **Routing**: Angular Router
- **Forms**: Reactive Forms
- **Pipes**: Custom pipes for search/sort

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
git clone https://github.com/Reham-Gomaa/E-commerce.git
cd E-commerce
npm install
Development Server
bash
ng serve
Open http://localhost:4200 in your browser.

Build
bash
ng build
📂 Project Structure
text
src/
├── app/
│   ├── core/
│   │   ├── interceptors/      # HTTP interceptors
│   │   ├── services/          # Core services
│   ├── features/
│   │   ├── products/          # Product-related components
│   │   ├── auth/              # Authentication
│   │   ├── cart/              # Shopping cart
│   ├── shared/
│   │   ├── components/        # Reusable components
│   │   ├── pipes/             # Custom pipes
├── assets/                    # Static files

## 🧱 Tech Stack Used

### Frontend
| Technology | Use Case |
|------------|----------|
| ![Angular] | Core framework |
| ![Tailwind CSS] | Utility-first styling |
| ![Flowbite] | UI components & dropdowns |
| ![Owl Carousel] | Product carousels |
| ![RxJS] | State management |
| ![NgxToastr] | Notifications |

### Backend Integration
| Technology | Use Case |
|------------|----------|
| ![FakeStoreAPI] | Product data |
| ![Angular HTTP] | API communication |
```

### Development Tools

| Technology | Use Case                            |
| ---------- | ----------------------------------- |
| ![git-cz]  | Commitizen for standardized commits |

### 🚀 Live Demo

[![Vercel]](https://e-commerce-ten-sigma-28.vercel.app/#/home)
