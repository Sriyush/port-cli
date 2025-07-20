#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');
const inquirer = require('inquirer');
const ora = require('ora');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get current time and format it
const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

// Get current date
const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const portfolio = {
  name: 'Ayush Srivastava',
  callme: '',
  role: 'Web3 Enthusiast | UFull-Stack Developer | Working as Frontend Developer',
  status: '🚧 Main Portfolio Under Construction 🚧',
  location: '📍 Bengaluru, India',
  time: getCurrentTime(),
  date: getCurrentDate(),
  web3: {
    interests: ['Blockchain', 'Smart Contracts', 'DeFi', 'NFTs'],
    currentFocus: 'Working as a WEB3 Frontend Developer',
    favoriteTech: ['Ethereum', 'Hardhat', 'Web3.js', 'WAGMI']
  },
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Reactjs','Nextjs', 'Web3'],
  projects: [
    {
      name: 'Main Portfolio Website',
      description: 'A modern portfolio website built with Next.js (In Development)'
    },
    {
      name: 'CLI Portfolio',
      description: 'A fun terminal-based portfolio (This one!)'
    },
    {
      name: 'DbSynchro',
      description: 'A tool to synchronize databases and google sheet data, built with Node.js and Express.js.'
    }
  ],
  social: {
    github: '🔗 https://github.com/sriyush',
    linkedin: '💼 https://linkedin.com/in/sriyush',
    twitter: '🐦 https://twitter.com/Sriyush1'
  }
};

const animateText = async (text, delay = 100) => {
  for (let char of text) {
    process.stdout.write(char);
    await sleep(delay);
  }
  process.stdout.write('\n');
};

const displayHeader = async () => {
  const spinner = ora('Loading your portfolio...').start();
  await sleep(2000);
  spinner.stop();

const header = (`
 ██████╗  ███████╗  ██╗██╗   ██╗██╗  ██╗ ██████╗  ██╗  ██╗
 ██╔═══   ██╔═  ██╗ ██║╚██╗ ██╔╝██║  ██║ ██╔═══╝  ██║  ██║
╚██████╔╝ ███████╔╝ ██║ ╚████╔╝ ██║  ██║╚██████╔╝ ███████║
     ██╗  ██╔══ ██╗ ██║  ╚██╔╝  ██║  ██║ ╔══ ██╗  ██╔══██║
 ██████╔╝ ██║   ██╗ ██║   ██║   ╚████╔╝  ██████╔╝ ██║  ██║
 ╚═════╝  ╚═╝   ╚═╝ ╚═╝   ╚═╝    ╚═══╝   ╚═════╝  ╚═╝  ╚═╝
`);

  console.log(header);
  await animateText(chalk.cyan('Welcome to AYush\'s CLI Portfolio! 👋'), 50);
  await animateText(chalk.yellow('🚧 Main Portfolio Under Construction 🚧'), 50);
  await animateText(chalk.gray('This is a fun terminal-based version while the main portfolio is being built!'), 50);
  await animateText(chalk.blue(`⏰ Current Time: ${portfolio.time}`), 50);
  await animateText(chalk.blue(`📅 ${portfolio.date}`), 50);
  await animateText(chalk.green(portfolio.location), 50);
  await sleep(1000);
};

const displayInfo = async () => {
  const spinner = ora('Fetching information...').start();
  await sleep(1500);
  spinner.stop();

  const info = boxen(
    `
${chalk.bold('Name:')} ${portfolio.name}
${chalk.bold('Role:')} ${portfolio.role}
${chalk.bold('Status:')} ${chalk.yellow(portfolio.status)}
${chalk.bold('Location:')} ${portfolio.location}
${chalk.bold('Current Time:')} ${portfolio.time}

${chalk.bold('Web3 Focus:')}
  • Current Focus: ${portfolio.web3.currentFocus}
  • Interests: ${portfolio.web3.interests.join(', ')}
  • Favorite Tech: ${portfolio.web3.favoriteTech.join(', ')}

${chalk.bold('Skills:')}
${portfolio.skills.map(skill => `  • ${skill}`).join('\n')}

${chalk.bold('Projects:')}
${portfolio.projects.map(project => `  • ${project.name}: ${project.description}`).join('\n')}

${chalk.bold('Social:')}
  • GitHub: ${portfolio.social.github}
  • LinkedIn: ${portfolio.social.linkedin}
  • Twitter: ${portfolio.social.twitter}
`,
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'cyan'
    }
  );

  await animateText(info, 10);
};

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to know more about?',
      choices: [
        'View all information',
        'Web3 Focus',
        'Skills',
        'Projects',
        'Social links',
        'Current Time & Location',
        'Exit'
      ]
    }
  ]);

  const spinner = ora('Loading...').start();
  await sleep(1000);
  spinner.stop();

  switch (action) {
    case 'View all information':
      await displayInfo();
      break;
    case 'Web3 Focus':
      const web3Spinner = ora('Connecting to Web3...').start();
      await sleep(1500);
      web3Spinner.stop();
      console.log(boxen(
        `
${chalk.bold('Current Focus:')} ${portfolio.web3.currentFocus}

${chalk.bold('Interests:')}
${portfolio.web3.interests.map(interest => `  • ${interest}`).join('\n')}

${chalk.bold('Favorite Technologies:')}
${portfolio.web3.favoriteTech.map(tech => `  • ${tech}`).join('\n')}
`,
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'magenta' }
      ));
      break;
    case 'Skills':
      const skillsSpinner = ora('Analyzing skills...').start();
      await sleep(1500);
      skillsSpinner.stop();
      console.log(boxen(
        portfolio.skills.map(skill => `  • ${skill}`).join('\n'),
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green' }
      ));
      break;
    case 'Projects':
      const projectsSpinner = ora('Loading projects...').start();
      await sleep(1500);
      projectsSpinner.stop();
      console.log(boxen(
        portfolio.projects.map(project => `  • ${project.name}: ${project.description}`).join('\n'),
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'yellow' }
      ));
      break;
    case 'Social links':
      const socialSpinner = ora('Connecting to social networks...').start();
      await sleep(1500);
      socialSpinner.stop();
      console.log(boxen(
        `
${chalk.bold('Connect with me:')}
${Object.entries(portfolio.social)
  .map(([platform, link]) => `  ${link}`)
  .join('\n')}
`,
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'blue' }
      ));
      break;
    case 'Current Time & Location':
      const timeSpinner = ora('Fetching current time...').start();
      await sleep(1500);
      timeSpinner.stop();
      console.log(boxen(
        `
${chalk.bold('Current Time:')} ${getCurrentTime()}
${chalk.bold('Date:')} ${getCurrentDate()}
${chalk.bold('Location:')} ${portfolio.location}
`,
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }
      ));
      break;
    case 'Exit':
      const exitSpinner = ora('Closing portfolio...').start();
      await sleep(1000);
      exitSpinner.stop();
      console.log(chalk.green('Thanks for visiting! 👋'));
      process.exit(0);
  }

  // Ask if user wants to continue
  const { continueBrowsing } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continueBrowsing',
      message: 'Would you like to continue browsing?',
      default: true
    }
  ]);

  if (continueBrowsing) {
    await mainMenu();
  } else {
    const goodbyeSpinner = ora('Saving your session...').start();
    await sleep(1000);
    goodbyeSpinner.stop();
    console.log(chalk.green('Thanks for visiting! 👋'));
  }
};

// Start the application
const start = async () => {
  await displayHeader();
  await mainMenu();
};

start(); 