# Agro Products Website

Responsive static agricultural products catalogue for Nigeria.

## Features
- Responsive homepage and navigation.
- Product catalogue with search and category filters.
- Product prices hidden; orders/enquiries are initiated through WhatsApp.
- Placeholder business name and WhatsApp number until confirmed.
- Agricultural chemical safety notice.

## Configure
Edit `assets/js/main.js`:
- `CONFIG.businessName`: client's confirmed business name.
- `CONFIG.whatsappNumber`: international digits only, e.g. `2348012345678`.
- `CONFIG.location`: confirmed business location.

Replace sample products with genuine inventory, real photographs and verified product/registration details. Do not invent chemical directions or application rates.

## GitHub Pages
Repository Settings → Pages → Deploy from a branch → Branch `main`, folder `/(root)` → Save.

## Limitations
GitHub Pages is static hosting. WhatsApp orders are handled manually. Secure admin login, database, payments and inventory management require a backend or external service.