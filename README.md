# Live Link: https://joy-shutra-dhar.netlify.app/

A modern, responsive portfolio website built with React.js, Vite, and Framer Motion animations.

## Features

- **Pure React Setup**: Built with Vite (no Create React App)
- **JSX Components**: All components use .jsx extension
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Interactive Components**: Hover effects, smooth scrolling, and engaging interactions

## Technologies Used

- React.js (Pure React with Vite)
- Vite (Fast build tool and dev server)
- Framer Motion for animations
- Tailwind CSS + DaisyUI for styling and components
- PostCSS for CSS processing
- Font Awesome for icons
- Google Fonts (Roboto)

## Getting Started

### Prerequisites

Make sure you have Node.js (version 16 or higher) installed on your machine.

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx     # Navigation sidebar with profile info
│   ├── Hero.jsx        # Hero section with introduction
│   ├── Skills.jsx      # Skills and technologies section
│   ├── Portfolio.jsx   # Project portfolio showcase
│   ├── Resume.jsx      # Resume/experience section
│   ├── Contact.jsx     # Contact form and information
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind imports
```

### 5. **DaisyUI Components Integration**
- Professional UI components from DaisyUI
- Cards, buttons, forms, badges, and navigation components
- Consistent design system with semantic color classes
- Dark/light theme support with DaisyUI themes
- Responsive components that work across all screen sizes

## Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS + DaisyUI configuration with custom themes
- `postcss.config.js` - PostCSS configuration for Tailwind
- `package.json` - Dependencies and scripts

## DaisyUI Components Used

- **Cards**: Project portfolio, resume sections, contact info
- **Buttons**: Primary actions, social links, form submissions
- **Forms**: Contact form with proper form controls
- **Badges**: Skills tags, status indicators, technology labels
- **Menu**: Navigation sidebar with menu components
- **Avatar**: Profile pictures with proper styling
- **Toggle**: Dark mode switch
- **Hero**: Main introduction section
- **Footer**: Semantic footer component

## Customization

### Updating Content

- **Personal Information**: Edit the content in each component file (.jsx)
- **Images**: Replace the image URLs with your own
- **Social Links**: Update the href attributes in Sidebar.jsx and Contact.jsx
- **Skills**: Modify the skills array in Skills.jsx
- **Projects**: Update the projects array in Portfolio.jsx
- **Experience**: Edit the work experience and education arrays in Resume.jsx

### Styling with DaisyUI

The project uses DaisyUI components with custom themes defined in `tailwind.config.js`:
- **Primary color**: `#54B689` (mint green)
- **Custom light/dark themes** with semantic color variables
- **Component classes**: Use DaisyUI classes like `btn`, `card`, `badge`, etc.
- **Theme switching**: Automatic theme switching with `data-theme` attribute

### DaisyUI Theme Customization

You can customize the themes in `tailwind.config.js`:
```javascript
daisyui: {
  themes: [
    {
      light: {
        "primary": "#54B689",
        "secondary": "#f000b8",
        // ... other colors
      },
      dark: {
        "primary": "#54B689",
        "base-100": "#111827",
        // ... other colors
      }
    }
  ]
}
```

### Animations

Framer Motion animations are configured throughout the components:
- Staggered animations for lists and grids
- Hover effects on interactive elements
- Smooth page transitions
- Custom animation variants for consistent timing

## Browser Support

This application supports all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.
