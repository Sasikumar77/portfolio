# Sasi - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features an AI-powered chat assistant powered by Google Gemini.

## 🚀 Features

- **Modern UI**: Built with React and Tailwind CSS
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **AI Chat Assistant**: Interactive chat powered by Google Gemini API
- **Smooth Animations**: Scroll-based navigation and transitions
- **Dark Theme**: Professional dark mode aesthetic
- **Fast Performance**: Optimized with Vite for rapid loading

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- Gemini API key (for AI chat feature) - [Get it here](https://makersuite.google.com/app/apikey)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

## 🏃 Running Locally

### Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
This creates an optimized build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

### Step 1: Update `package.json`
Update the `homepage` field to match your repository:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

### Step 2: Install gh-pages (if not already installed)
```bash
npm install --save-dev gh-pages
```

### Step 3: Deploy
```bash
npm run deploy
```

This will:
- Build the project
- Push the contents of the `dist` folder to the `gh-pages` branch

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `/ (root)`
4. Click **Save**

Your site will be live at `https://yourusername.github.io/portfolio` within a few minutes.

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Important**: Never commit `.env.local` to version control. The `.gitignore` file already excludes it.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind CSS imports
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies and scripts
└── .env.example          # Environment variables template
```

## 🎨 Customization

### Update Personal Information
Edit `src/App.jsx` and modify the `personalInfo` object:

```javascript
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... other details
};
```

### Update Skills
Modify the `skills` array in `src/App.jsx`

### Update Experience
Modify the `experience` array in `src/App.jsx`

### Update Education
Modify the `education` array in `src/App.jsx`

## 🤖 AI Chat Assistant

The chat widget uses Google Gemini API to provide intelligent responses about your profile. Make sure to:

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to `.env.local`
3. The system instruction is configured in the `callGemini` function

## 🚨 Troubleshooting

### Chat not working?
- Verify your Gemini API key is correct in `.env.local`
- Check browser console for errors
- Ensure you have quota remaining on your API

### Deployment issues?
- Make sure `homepage` in `package.json` matches your GitHub Pages URL
- Verify the `gh-pages` branch exists in your repository
- Check GitHub Pages settings are pointing to the correct branch

### Styling not loading?
- Clear browser cache
- Rebuild with `npm run build`

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

If you have questions or run into issues, feel free to open an issue on GitHub.

---

Built with ❤️ using React, Tailwind CSS, and Vite
