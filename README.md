# Kodo Pitch Visuals

Premium, dark-themed pitch deck visuals for **Kodo** — the action engine that turns meetings into tasks automatically.

## Design Philosophy

Built with a **Linear + Vercel + Anthropic** aesthetic:
- Clean, minimal, understated premium design
- Black background with subtle aurora glow (green/yellow)
- Monochrome UI elements with soft green accents
- No 3D, no illustrations, no overdesign
- Large spacing, sharp typography, clean grids

## Visual Set

### 1. Hero Visual (`01-hero.html`)
**Main headline:** "Meetings → Tasks. Automatically."
Features floating UI mockup with task preview cards and smooth animations.

### 2. How It Works (`02-how-it-works.html`)
Clean 3-step horizontal diagram:
- Meeting conversation capture
- AI extraction & segmentation
- One-click execution to tools (Jira, GitHub, Figma, Slack)

### 3. Task Cards Preview (`03-task-cards.html`)
Grid of 6 auto-generated task cards:
- Jira task
- GitHub code change
- Figma design task
- Documentation snippet
- Slack message draft
- Test plan

### 4. PR Machine (`04-pr-machine.html`)
Side-by-side comparison:
- **Left:** Meeting conversation transcript
- **Right:** Auto-generated GitHub pull request with diff preview

### 5. Architecture (`05-architecture.html`)
4-layer vertical stack:
1. Input (audio, chat, screen shares)
2. AI Processing (transcription, segmentation, extraction)
3. MCP Integration Layer (tool connectors)
4. Execution & Delivery (task creation)

### 6. Use Cases (`06-use-cases.html`)
5 persona cards with icons:
- Developer
- Product Manager
- Designer
- Marketing
- Client Success

Each includes real-world use case examples.

### 7. Before vs After (`07-before-after.html`)
Split comparison showing:
- **Before:** Scattered notes, manual work, lost context, delays
- **After:** Auto-capture, instant execution, perfect context, momentum

Includes comparison metrics (time to task, automation %, context loss).

### 8. Closing / CTA (`08-closing.html`)
Final slide with:
- Kodo logo mark
- Tagline: "The Action Engine Behind Every Meeting"
- Feature highlights
- Call to action
- Contact information

## Usage

### Viewing the Visuals

1. **Navigate all visuals:**
   ```bash
   open pitch-visuals/index.html
   ```

2. **View individual slides:**
   ```bash
   open pitch-visuals/01-hero.html
   open pitch-visuals/02-how-it-works.html
   # etc...
   ```

3. **Full-screen presentation:**
   - Open any visual in your browser
   - Press `F11` (or `Cmd+Shift+F` on Mac) for full-screen
   - Navigate between visuals using the index page

### Exporting as Images

**Method 1: Browser Screenshots**
- Open the visual in full-screen (F11)
- Use browser dev tools (F12) → Device toolbar → Set to 1920x1080
- Take screenshot (Cmd+Shift+4 on Mac, Win+Shift+S on Windows)

**Method 2: Programmatic Export**
You can use tools like:
- Puppeteer (Node.js)
- Playwright
- Selenium

Example with Puppeteer:
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('file:///path/to/01-hero.html');
  await page.screenshot({ path: '01-hero.png', fullPage: false });
  await browser.close();
})();
```

### Customization

All visuals share a common design system in `shared-styles.css`:

**Colors:**
- Background: `#000000`
- Text primary: `#ffffff`
- Text secondary: `#808080`
- Accent green: `#22c55e`
- Aurora glow: Radial gradient with green/yellow

**Typography:**
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter'`
- Headings: 600 weight, tight letter-spacing
- Body: 400 weight, generous line-height

**To customize:**
1. Edit `shared-styles.css` for global changes
2. Edit individual HTML files for slide-specific adjustments

## File Structure

```
kodo-show/
├── README.md
└── pitch-visuals/
    ├── index.html              # Navigation page
    ├── shared-styles.css       # Global design system
    ├── 01-hero.html           # Hero visual
    ├── 02-how-it-works.html   # Process diagram
    ├── 03-task-cards.html     # Task preview grid
    ├── 04-pr-machine.html     # PR comparison
    ├── 05-architecture.html   # Tech stack
    ├── 06-use-cases.html      # User personas
    ├── 07-before-after.html   # Transformation
    └── 08-closing.html        # Final CTA
```

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

Optimized for:
- Desktop: 1920x1080 and above
- Tablet: Responsive layouts
- Mobile: Simplified single-column views

## Tips for Presenting

1. **Use fullscreen mode** (F11) for clean presentations
2. **Navigate in order** using the index page or browser tabs
3. **Let animations play** — each slide has subtle entrance animations
4. **Take your time** — visuals are designed to be absorbed, not rushed
5. **Screenshot mode** — Press F12 and set device to 1920x1080 for perfect export dimensions

## Design Credits

- Aesthetic inspiration: Linear, Vercel, Anthropic
- Icons: Custom minimal SVG designs
- Animations: CSS-only, performance-optimized
- No external dependencies or frameworks

---

**Kodo** — The Action Engine Behind Every Meeting.
