# CLI Portfolio Template

A unique command-line interface (CLI) styled portfolio website built with React. This template allows you to showcase your professional experience, skills, and projects in an interactive terminal-like interface.

##  Demo Commands

Available commands in the portfolio:

- `about` - Display information about you
- `projects` - Show your portfolio projects
- `skills` - List your technical skills
- `social` - Show your social media links
- `stats` - Display your GitHub stats
- `experience` - Show your professional experience
- `education` - Show your academic background
- `clear` - Clear the terminal screen
- `date` - Show the current date and time

##  Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/CLI-Portfolio.git
cd CLI-Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

##  Customization Guide

### 1. Personal Information

Edit the following files to customize your portfolio:

- `src/commands/About.jsx`: Update your personal introduction and bio
- `src/commands/Experience.jsx`: Add your work experience
- `src/commands/Education.jsx`: Update your educational background
- `src/commands/Skills.jsx`: List your technical skills
- `src/commands/Projects.jsx`: Add your portfolio projects
- `src/commands/Social.jsx`: Update your social media links

### 2. GitHub Stats

In `src/commands/Stats.jsx`, replace the GitHub username with your own to display your GitHub statistics.

### 3. Styling

- `src/styles.css`: Customize the overall appearance
- Each component in `src/commands/` can be styled individually using inline styles or CSS

### 4. Adding New Commands

1. Create a new component in `src/commands/`
2. Add the command to the command list in `src/commands/Help.jsx`
3. Import and add the component to the command handler in App.jsx

##  Dependencies

- React
- react-console-emulator
- Other dependencies can be found in `package.json`

##  Additional Features

- Visitor counter functionality (currently commented out, can be enabled)
- Responsive design
- Custom command prompt
- Command history navigation


##  Contributing

Feel free to fork this repository and create your own portfolio. If you make any improvements, consider creating a pull request to help others!

##  Important Notes

- Make sure to update all personal information before deploying
- Test all commands after making changes
- Keep dependencies updated
- Remove the demo content before publishing

##  Tips for Customization

1. **Command Prompt**: You can customize the command prompt appearance in the main terminal component
2. **Color Scheme**: Modify the color variables in the CSS to match your preferred theme
3. **Command Output**: Each command component can return custom JSX for unique layouts
4. **Mobile Responsiveness**: Test and adjust the styling for various screen sizes
