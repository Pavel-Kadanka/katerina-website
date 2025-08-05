# 🎨 Purple & Pink Theme Guide
## Reiki & Šamanské léčení Website

This guide documents the implementation of the soft, welcoming, and professional purple and pink color theme for the Reiki & Šamanské léčení website.

## 🌈 Color Palette

| Role | Color | Hex Code | Purpose |
|------|-------|----------|---------|
| **Primary** | Soft Lavender | `#8B7EC8` | Spiritual, calming - main brand color |
| **Secondary** | Warm Pastel Pink | `#E8C1D3` | Feminine, soft - supporting elements |
| **Accent** | Bright Pink-Purple | `#D49DC9` | Call-to-actions, highlights |
| **Surface** | Pale Pink | `#FAF7FC` | Background for sections, cards |
| **Text** | Dark Blue-Gray | `#2C3E50` | Professional, readable text |

## 🛠 Implementation Files

### 1. Vuetify Theme Configuration
**File:** `app/plugins/vuetify.js`

The theme is configured with both light and dark variants:

```javascript
const light = {
  dark: false,
  colors: {
    primary: '#8B7EC8',     // Soft lavender
    secondary: '#E8C1D3',   // Warm pastel pink
    accent: '#D49DC9',      // Bright pink-purple
    surface: '#FAF7FC',     // Pale pink background
    background: '#FAF7FC',
    'text-primary': '#2C3E50',
    'text-secondary': '#5A6C7D',
    // ... system colors
  }
}
```

### 2. Global Styles
**File:** `app/assets/styles/global.scss`

Includes:
- Typography (Cormorant Garamond for headings, Poppins for body)
- Base styling for body, headings, and text
- Enhanced button and card styling
- Blockquote styling with spiritual theme
- Utility classes and responsive design

### 3. Gradient Animations
**File:** `app/assets/styles/gradients.css`

Features:
- Animated background gradients
- Gradient buttons with hover effects
- Gradient text effects
- Floating icon animations
- Spiritual decorative elements

## 🎯 Usage Examples

### Basic Vuetify Components

```vue
<!-- Primary Button -->
<v-btn color="primary" rounded="xl">
  Objednat se
</v-btn>

<!-- Secondary Card -->
<v-card color="surface" elevation="2" rounded="xl">
  <v-card-title class="text-primary">
    Reiki léčení
  </v-card-title>
  <v-card-text class="text-body">
    Harmonizace těla a duše...
  </v-card-text>
</v-card>

<!-- Accent Button for CTAs -->
<v-btn color="accent" size="large" class="animated-gradient-btn">
  <v-icon left>mdi-heart</v-icon>
  Kontaktovat
</v-btn>
```

### Advanced Styling Classes

```vue
<!-- Animated gradient background -->
<div class="animated-gradient-bg">
  <!-- Content -->
</div>

<!-- Gradient text -->
<h1 class="gradient-text-primary">
  Reiki & Šamanské léčení
</h1>

<!-- Spiritual border -->
<v-card class="spiritual-border">
  <!-- Content -->
</v-card>

<!-- Soft gradient background -->
<div class="soft-gradient-primary">
  <!-- Content -->
</div>

<!-- Hover lift effect -->
<v-card class="hover-lift">
  <!-- Content -->
</v-card>
```

### Typography

```vue
<!-- Headings (Cormorant Garamond) -->
<h1 class="gradient-text-primary">Main Title</h1>
<h2 class="text-primary">Section Title</h2>
<h3 class="text-primary">Subsection Title</h3>

<!-- Body text (Poppins) -->
<p class="text-body">Regular paragraph text</p>
<p class="text-secondary">Secondary text</p>

<!-- Blockquote -->
<blockquote>
  "Testimonial or quote text..."
</blockquote>
```

## 🎨 Visual Enhancements

### 1. Animated Elements
- **Floating Icons:** Use `floating-icon` class
- **Gradient Buttons:** Use `animated-gradient-btn` class
- **Hover Effects:** Use `hover-lift` class for cards

### 2. Decorative Elements
- **Spiritual Dividers:** Use `spiritual-divider` class
- **Decorative Icons:** Use `decorative-icon` class
- **Gradient Borders:** Use `spiritual-border` class

### 3. Background Patterns
- **Soft Gradients:** `soft-gradient-primary`, `soft-gradient-secondary`
- **Spiritual Patterns:** `spiritual-pattern` class
- **Animated Backgrounds:** `animated-gradient-bg` class

## 📱 Responsive Design

The theme includes responsive typography and spacing:

```scss
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
  .pa-6 { padding: 2rem; }
}
```

## 🎭 Dark Theme Support

The theme includes a dark variant with:
- Lighter lavender primary colors
- Softer pink secondary colors
- Deep purple-tinted dark backgrounds
- Adjusted text colors for readability

## 🚀 Best Practices

### 1. Color Usage
- Use **primary** (`#8B7EC8`) for main brand elements and headings
- Use **secondary** (`#E8C1D3`) for supporting elements and backgrounds
- Use **accent** (`#D49DC9`) for call-to-action buttons and highlights
- Use **surface** (`#FAF7FC`) for card backgrounds and sections

### 2. Typography
- Use Cormorant Garamond for headings (spiritual, elegant feel)
- Use Poppins for body text (readable, modern)
- Maintain proper hierarchy with font sizes and weights

### 3. Animations
- Keep animations subtle and smooth
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for transitions
- Avoid overwhelming users with too many moving elements

### 4. Accessibility
- Ensure sufficient color contrast (text colors meet WCAG guidelines)
- Provide focus states for interactive elements
- Use semantic HTML structure

## 🔧 Customization

### Adding New Colors
To add new colors to the theme, update `app/plugins/vuetify.js`:

```javascript
colors: {
  // ... existing colors
  'custom-color': '#YOUR_HEX_CODE',
  'custom-color-darken-1': '#DARKER_VARIANT',
  'custom-color-lighten-1': '#LIGHTER_VARIANT',
}
```

### Creating New Utility Classes
Add new utility classes to `app/assets/styles/global.scss`:

```scss
.custom-utility {
  // Your styles here
}
```

### Adding New Animations
Add new animations to `app/assets/styles/gradients.css`:

```css
@keyframes customAnimation {
  /* Animation keyframes */
}

.custom-animation {
  animation: customAnimation 2s ease-in-out infinite;
}
```

## 📋 Component Examples

See `app/components/ThemeExample.vue` for a comprehensive example of how to use all the theme features in a real component.

## 🎯 Next Steps

1. **Apply the theme** to existing components
2. **Test responsiveness** across different devices
3. **Validate accessibility** with screen readers
4. **Optimize performance** by minimizing CSS bundle size
5. **Document component usage** for the development team

---

*This theme creates a soft, welcoming, and professional visual identity that perfectly suits the spiritual and healing nature of Reiki & Šamanské léčení services.* 