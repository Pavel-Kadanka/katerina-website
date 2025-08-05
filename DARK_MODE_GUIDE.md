# 🌙 Dark Mode Support Guide
## Reiki & Šamanské léčení Website

This guide documents the dark mode improvements and fixes implemented for the Reiki & Šamanské léčení website.

## 🎯 Issues Fixed

### 1. **Text Visibility on Animated Gradient Backgrounds**
- **Problem:** Text was not visible on animated gradient backgrounds in dark mode
- **Solution:** Added text shadows and improved contrast for both light and dark themes

### 2. **Text-Secondary Visibility**
- **Problem:** `text-secondary` color was not visible enough on white backgrounds
- **Solution:** Darkened the color from `#5A6C7D` to `#4A5568` for better contrast

### 3. **Component Dark Mode Support**
- **Problem:** New components didn't support dark mode properly
- **Solution:** Added comprehensive dark mode styling for all components

## 🌈 Dark Mode Color Palette

### **Light Theme Colors:**
- **Primary:** `#8B7EC8` (Soft lavender)
- **Secondary:** `#E8C1D3` (Warm pastel pink)
- **Accent:** `#D49DC9` (Bright pink-purple)
- **Surface:** `#FAF7FC` (Pale pink background)
- **Text Primary:** `#2C3E50` (Dark blue-gray)
- **Text Secondary:** `#4A5568` (Improved contrast)

### **Dark Theme Colors:**
- **Primary:** `#9A8DD8` (Lighter lavender)
- **Secondary:** `#F0D2E4` (Softer pink)
- **Accent:** `#E5B0DA` (Brighter accent)
- **Surface:** `#16213E` (Deep purple-tinted dark)
- **Background:** `#1A1A2E` (Deep dark background)
- **Text Primary:** `#FFFFFF` (White)
- **Text Secondary:** `#E8E8E8` (Light gray)

## 🛠 Implementation Details

### 1. **Global Styles (`app/assets/styles/global.scss`)**

#### **Theme-Specific Text Colors:**
```scss
.v-theme--light {
  .text-secondary {
    color: #4A5568 !important;
    font-weight: 400;
  }
  
  .text-primary {
    color: #2C3E50 !important;
    font-weight: 400;
  }
}

.v-theme--dark {
  .text-secondary {
    color: #E8E8E8 !important;
    font-weight: 400;
  }
  
  .text-primary {
    color: #FFFFFF !important;
    font-weight: 400;
  }
}
```

#### **Gradient Text Support:**
```scss
.v-theme--light .gradient-text-primary {
  background: linear-gradient(135deg, #8B7EC8, #D49DC9) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.v-theme--dark .gradient-text-primary {
  background: linear-gradient(135deg, #9A8DD8, #E5B0DA) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
```

### 2. **Gradient Animations (`app/assets/styles/gradients.css`)**

#### **Theme-Specific Background Gradients:**
```css
.v-theme--light .animated-gradient-bg {
  background: linear-gradient(135deg, #FAF7FC, #E8C1D3, #F0D2E4, #F5F0F8);
}

.v-theme--dark .animated-gradient-bg {
  background: linear-gradient(135deg, #1A1A2E, #2A2A3E, #16213E, #1F1B24);
}
```

#### **Text Visibility Enhancements:**
```css
.v-theme--light .animated-gradient-bg .text-secondary {
  color: #4A5568 !important;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.v-theme--dark .animated-gradient-bg .text-secondary {
  color: #E8E8E8 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}
```

### 3. **Vuetify Theme Configuration (`app/plugins/vuetify.js`)**

#### **Improved Text Colors:**
```javascript
const light = {
  colors: {
    'text-primary': '#2C3E50',
    'text-secondary': '#4A5568', // Darker for better visibility
  }
}

const dark = {
  colors: {
    'text-primary': '#FFFFFF',
    'text-secondary': '#E8E8E8', // Brighter for better visibility
  }
}
```

## 🎨 Component Dark Mode Support

### 1. **Cards and Containers**
- All cards now use `color="surface"` which adapts to the current theme
- Hover effects and shadows are theme-specific
- Borders and decorative elements adapt to theme colors

### 2. **Buttons**
- Gradient buttons have different colors for light and dark themes
- Hover effects are theme-appropriate
- Text colors automatically adapt

### 3. **Navigation**
- Menu component fully supports dark mode
- Theme toggle button with appropriate icons
- Mobile navigation drawer with theme-specific styling

### 4. **Typography**
- All text classes have theme-specific colors
- Gradient text effects work in both themes
- Improved contrast for better readability

## 🔧 Usage Examples

### **Theme-Aware Components:**
```vue
<v-card color="surface" class="hover-lift spiritual-shadow">
  <v-card-title class="text-primary">Title</v-card-title>
  <v-card-text class="text-secondary">Content</v-card-text>
</v-card>
```

### **Gradient Backgrounds:**
```vue
<div class="animated-gradient-bg">
  <div class="hero-content">
    <h1 class="gradient-text-primary">Title</h1>
    <p class="text-secondary">Subtitle</p>
  </div>
</div>
```

### **Theme Toggle:**
```vue
<ThemeToggle />
```

## 🎯 Best Practices

### 1. **Always Use Theme-Aware Colors**
- Use `color="surface"` for cards and containers
- Use `text-primary` and `text-secondary` classes for text
- Avoid hardcoded colors

### 2. **Test Both Themes**
- Always test components in both light and dark modes
- Ensure sufficient contrast ratios
- Verify text readability on gradient backgrounds

### 3. **Use CSS Classes**
- Leverage the existing theme-specific CSS classes
- Add new theme-aware styles when needed
- Use `!important` sparingly and only for theme overrides

## 🚀 Features Added

### 1. **Theme Toggle Component**
- Smooth transitions between themes
- Appropriate icons for each theme
- Hover effects and animations

### 2. **Enhanced Menu Component**
- Full dark mode support
- Responsive design
- Theme-aware styling

### 3. **Improved Text Visibility**
- Better contrast ratios
- Text shadows on gradient backgrounds
- Theme-specific gradient text effects

### 4. **Comprehensive Styling**
- All components now support both themes
- Consistent color scheme throughout
- Professional appearance in both modes

## 🔍 Testing Checklist

- [ ] All pages display correctly in light mode
- [ ] All pages display correctly in dark mode
- [ ] Text is readable on all backgrounds
- [ ] Theme toggle works properly
- [ ] Navigation is functional in both themes
- [ ] Gradient backgrounds work in both themes
- [ ] Buttons and interactive elements are visible
- [ ] No hardcoded colors remain
- [ ] Contrast ratios meet accessibility standards

## 📱 Responsive Design

The dark mode implementation is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes and orientations

## ♿ Accessibility

- Improved contrast ratios for better readability
- Text shadows for better visibility on gradient backgrounds
- Consistent color scheme that works for users with visual impairments
- Proper focus states for keyboard navigation

---

*The dark mode implementation provides a seamless experience across all devices and ensures that all content remains readable and accessible in both light and dark themes.* 