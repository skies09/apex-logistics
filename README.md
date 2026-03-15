## Apex Logistics

Modern single-page marketing site for a professional driver and logistics services, built with React and Tailwind CSS. It showcases services, experience, qualifications, and includes animated sections and a contact form for enquiries.

### Tech stack

- **Framework**: React (Create React App)
- **Styling**: Tailwind CSS with a custom brand theme
- **Animation**: Framer Motion
- **Forms & Validation**: Formik + Yup
- **Icons**: Font Awesome

### Getting started

- **Install dependencies**:

```bash
npm install
```

- **Run the dev server**:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Available scripts

- **`npm start`**: Run the app in development mode.
- **`npm run build`**: Create a production build in the `build` folder.
- **`npm test`**: Run tests in watch mode (if you add tests).
- **`npm run eject`**: Eject CRA configuration (irreversible, usually not needed).

### Project structure (high level)

- **`src/pages`**: Top-level sections like `hero`, `about`, `services`, and `contact`.
- **`src/components`**: Reusable UI elements such as `navbar`, `button`, `menu`, `iconCloud`, and layout helpers.
- **`tailwind.config.js`**: Tailwind setup with Apex Logistics brand colors, fonts, and shadows.

### Building & deployment

To create an optimized production build:

```bash
npm run build
```

Deploy the contents of the `build` folder to your static hosting provider (e.g. Netlify, Vercel, Firebase Hosting, or traditional web hosting).

