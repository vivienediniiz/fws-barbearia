# Aesthetic Clinic SaaS - Estética Flowers

Multi-tenant white-label appointment scheduling system for aesthetic clinics.

## 🏗️ Architecture

- **Frontend**: Next.js 16+ with App Router, React 19, TypeScript, Tailwind CSS 4
- **Backend**: Next.js Server Actions (can be extended to NestJS/Express)
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: To be implemented (NextAuth.js or Supabase)
- **Multi-tenancy**: Row-level security via tenant_id isolation

## 📱 Key Features

### Client PWA (Mobile-First)
- Splash/Welcome screen with clinic branding
- Login/Signup with email, phone, or social login
- Personalized home dashboard with greeting and service carousel
- Service catalog with detailed views
- Appointment booking with calendar interface
- Appointment management ("Meus Agendamentos")
- User profile with menu navigation
- Bottom navigation for easy access (Home, Booking, Appointments, Profile)

### Design System
- **Color Palette**: Warm cream/taupe/gold aesthetic
  - Primary: #D4AF37 (Gold)
  - Secondary: #C5A059 (Gold variant)
  - Background: #FDFBF7 (Cream)
  - Text: #3D2C22 (Deep taupe)
- **Typography**: Serif (Playfair Display) for headings, Sans (Inter) for body
- **Components**: Button, Card, Input, Header, BottomNav, ServiceCard
- **Theme**: Dynamic CSS variables for white-label customization

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Welcome screen (splash)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles & design tokens
│   ├── auth/                    # Authentication pages
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   └── app/                     # Authenticated app pages
│       ├── home/page.tsx
│       ├── booking/page.tsx
│       ├── appointments/page.tsx
│       └── profile/page.tsx
├── components/                  # Reusable React components
│   ├── ui/                      # Primitive components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── BottomNav.tsx
│   │   └── ClientLayout.tsx
│   ├── auth/                    # Auth-specific components
│   │   ├── WelcomeScreen.tsx
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   └── booking/                 # Booking-specific components
│       └── ServiceCard.tsx
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🗄️ Database Schema

### Core Models
- **Tenant**: Multi-tenant organization
- **TenantSettings**: Branding & configuration per tenant
- **User**: Clients, professionals, admins (roles: CLIENT, PROFESSIONAL, CLINIC_ADMIN, SUPER_ADMIN)
- **Service**: Available treatments (categories, pricing, duration)
- **Professional**: Staff members
- **Schedule**: Available time slots
- **Appointment**: Bookings with status tracking
- **ConsultationNote**: Professional notes from appointments

## 🎨 Design Tokens

### Colors (CSS Variables)
```css
--primary: 212 175 55;        /* #D4AF37 */
--secondary: 197 160 89;      /* #C5A059 */
--background: 253 251 247;    /* #FDFBF7 */
--text-primary: 61 44 34;     /* #3D2C22 */
--text-secondary: 74 59 50;   /* #4A3B32 */
--accent: 232 168 168;        /* #E8A8A8 */
```

### Tailwind Extends
- Colors: cream-50/100/200, taupe-600/700/800, gold-400/500, rose-300/400
- Border radius: pill (9999px)
- Box shadows: subtle, card

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation
```bash
pnpm install
cp .env.example .env.local
# Update DATABASE_URL in .env.local
pnpm prisma migrate dev
pnpm dev
```

### Development
- Run dev server: `pnpm dev`
- Build for production: `pnpm build`
- Run type checking: `pnpm build` (Next.js includes type checking)
- Lint code: `pnpm lint`

## 📝 Database Migrations

After updating `prisma/schema.prisma`:
```bash
pnpm prisma migrate dev --name <migration_name>
```

## 🔐 Authentication

TO DO: Implement NextAuth.js or Supabase Auth with:
- Email/password login
- Social login (Google, Facebook, Biometric)
- Multi-factor authentication
- JWT tokens with role-based access

## 🎯 Next Steps

1. **Database Setup**: Configure PostgreSQL and run migrations
2. **Authentication**: Implement NextAuth.js or Supabase Auth
3. **API Routes**: Create server actions or REST endpoints for:
   - User registration/login
   - Appointment CRUD
   - Service management
   - Schedule availability
4. **Calendar Integration**: Implement date/time picker component
5. **Payment Processing**: Integrate Stripe or similar (if required)
6. **Admin Dashboard**: Create tenant management interface
7. **Notifications**: SMS/Email for appointment confirmations

## 📱 Mobile Optimization

- Fully responsive design (mobile-first)
- Bottom navigation for easy thumb access
- Touch-friendly buttons (min 44px)
- PWA-ready (viewport, manifest in place)
- Dark mode support via CSS variables

## 🔧 Environment Variables

```
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## 📞 Support

For implementation details or questions about the SaaS white-label system, refer to the specification in `saasclinicaesteticaprompt.md`.
