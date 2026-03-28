# Niraj Kumar — Portfolio

A professional React + Vite portfolio with dark/light mode, responsive design, and smooth animations.

---

## 🚀 Setup (Run Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 File Structure

```
niraj-portfolio/
├── index.html                   ← Page title lives here
├── src/
│   ├── main.jsx                 ← React entry (don't edit)
│   ├── App.jsx                  ← Add/remove sections here
│   ├── index.css                ← Global styles & CSS vars
│   │
│   ├── data/
│   │   └── portfolio.js         ← ✏️  ALL YOUR CONTENT (edit this!)
│   │
│   ├── context/
│   │   └── ThemeContext.jsx     ← Dark/light mode logic
│   │
│   ├── hooks/
│   │   └── useReveal.js         ← Scroll animation hook
│   │
│   └── components/
│       ├── Navbar.jsx           ← Top navigation
│       ├── Hero.jsx             ← Landing section
│       ├── About.jsx            ← About me + stats
│       ├── Skills.jsx           ← Tech skills rows
│       ├── Projects.jsx         ← Project cards
│       ├── Experience.jsx       ← Work + education timeline
│       ├── Certifications.jsx   ← Cert cards
│       ├── Contact.jsx          ← Contact section
│       └── Footer.jsx           ← Footer
```

---

## ✏️ How to Edit Content

**Open `src/data/portfolio.js` — this is the ONLY file you need for content changes.**

---

### 👤 Change Personal Info
```js
export const personalInfo = {
  name:     'Your Name',        // ← change name
  role:     'Your Role',        // ← change role
  email:    'you@email.com',    // ← change email
  phone:    '+91 0000000000',   // ← change phone
  linkedin: 'https://...',      // ← your LinkedIn
  github:   'https://...',      // ← your GitHub
  available: true,              // ← false = hides badge
}
```

---

### 🛠 Add a Skill
Find the right category in `skills` array and push to `tags`:
```js
{
  name: 'AI / ML / NLP',
  color: 'cyan',
  tags: ['Generative AI', 'RAG', 'Your New Skill'],  // ← add here
}
```

### 🗑 Remove a Skill
Delete the string from the `tags` array.

### ➕ Add a Skill Category
```js
{
  icon:  '🔧',
  name:  'New Category',
  color: 'purple',          // purple | cyan | orange | slate
  tags:  ['Skill A', 'Skill B'],
}
```

---

### 📦 Add a Project
Copy this block into the `projects` array in `portfolio.js`:
```js
{
  id:        5,                    // unique number
  featured:  false,                // true = full width (only 1 at a time)
  num:       '05',
  emoji:     '🚀',
  gradient:  '#1a0a20, #2d0b3e',   // CSS gradient colors
  title:     'My New Project',
  desc:      'Description here. You can use <strong>HTML</strong> tags.',
  stack:     [
    { label: 'React',  color: 'orange' },
    { label: 'Python', color: 'purple' },
  ],
  liveUrl:   'https://your-deployed-site.com',   // or '#' if not ready
  githubUrl: 'https://github.com/you/repo',      // or '#' if not ready
}
```

### 🗑 Remove a Project
Delete the entire `{ ... }` object from the `projects` array.

---

### 💼 Add Work Experience
```js
// In workExperience array:
{
  id:      3,
  date:    '2023 — 2024',
  role:    'Software Engineer',
  company: 'Company Name · Full-time',
  points:  [
    'What you did here',
    'Another achievement',
  ],
}
```

### 🎓 Add Education
Same format, in the `education` array.

---

### 🏆 Add a Certification
```js
// In certifications array:
{ id: 5, icon: '🎯', title: 'Cert Name', sub: 'Issuer / Category' }
```

### 🗑 Remove a Certification
Delete its `{ id, icon, title, sub }` object.

---

### 🔗 Add a Project URL (when deployed)
In `portfolio.js`, find your project and update:
```js
liveUrl:   'https://routex.vercel.app',        // was '#'
githubUrl: 'https://github.com/you/routex',   // was '#'
```

---

### 🧭 Add/Remove a Nav Link
```js
// In navLinks array — add:
{ label: 'Blog', href: '#blog', section: 'blog' }

// section must match the id of a <section> element
// Also add the component to App.jsx
```

---

### 🗑 Remove an Entire Section
In `App.jsx`, comment out or delete the component:
```jsx
<Hero />
<About />
{/* <Skills /> */}   ← removed
<Projects />
```
Also remove its entry from `navLinks` in `portfolio.js`.

---

## 🎨 Change Colors
Open `src/index.css` and edit the CSS variables under `:root` (dark mode) or `[data-theme="light"]` (light mode):
```css
:root {
  --accent:  #7C5CFC;   /* main purple */
  --accent2: #A38BFD;   /* lighter purple */
  --green:   #22D3EE;   /* teal/cyan accent */
}
```

---

## 🌐 Deploy to Vercel (Free)
```bash
npm run build          # creates dist/ folder
# Then push to GitHub and connect repo to vercel.com
# Or: npx vercel --prod
```
