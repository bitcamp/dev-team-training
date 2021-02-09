# 🧰 Setting Up Your Dev Environment
While there are many ways to setup and customize your development environment, we'll walk through one recommended setup.

## Recommended Setup
### Text Editor
Install the [VSCode](https://code.visualstudio.com/) text editor.

- In terminal, you can open files/folders in VSCode using the `code <file>` command.
- **Recommended extensions**
  - [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): A linter for JS files
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): A code formatter (auto-formats spaces, tabs, etc.)
  - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Live reloads your browser while editing web apps
  - [Microsoft IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode): Intellisense + AI = Profit??
  - [Vueter](https://marketplace.visualstudio.com/items?itemName=octref.vetur): `Vue.js` support for VSCode
  - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner): Provides a button to run code (have to enable the "Show run icon in title menu" option)
  - [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) + [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl): Run VSCode on your machine to edit files on another machine. Pretty cool.
- **Themes**
  - [Explore](https://vscodethemes.com/) some of the cool color themes in VSCode
  - Choose an icon theme such as [VSCode icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) or the [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme).

### Command Line Tools
Install the following command-line tools.
   - [`git`](https://git-scm.com/downloads)
     - The most common version control system out there
     - Feel free to use a visual `git` client such as [GitHub Desktop](https://desktop.github.com/) or [GitKraken](https://www.gitkraken.com/) if that's your thing
   - [`node.js`](https://nodejs.org/en/download/)
     - Runtime environment for running JS outside the browser
     - **Note:** Linux/WSL users will probably want to install using Node Version Manager [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) or the package manager for your distro (instructions [here](https://nodejs.org/en/download/package-manager))
     - Comes with the `node` command, which runs JS code in the terminal, and the `npm` command (stands for "Node Package Manager"), which installs libraries from the `node` ecosystem
     - In each `node` project, you have a `package.json` file that lists out dependencies, build scripts, and other project metadata
     - Some of our projects use [`yarn`](https://yarnpkg.com/) instead of `npm`
       - If you see a `yarn.lock` file, the project uses `yarn`. If you see a `package-lock.json` file, it uses `npm` (those two files fully describe dependency versions)
       - A conversion chart for common commands can be found [here](https://classic.yarnpkg.com/en/docs/migrating-from-npm/#toc-cli-commands-comparison)
#### WSL for Windows
If you're on Windows, I'd recommend using [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) alongside [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10). [This blog post](https://blog.nillsf.com/index.php/2020/02/17/setting-up-wsl2-windows-terminal-and-oh-my-zsh/) has a pretty solid tutorial for setting everything up. Setting this up isn't a requirement, but these tools provide a pleasent developer experience, especially for users who are comfortable with Unix.

## Project-Specific Tooling
Some projects have specific tools that greatly improve the development experience.

### Platform
 - [Vue.js Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en): Browser extension for debugging Vue applications

### Mobile Apps
 - [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en): Browser extension for debugging React & React Native applications
 - [Expo](https://expo.io/): The easiest way to build and develop React Native apps
 - [Android Studio](https://developer.android.com/studio): Useful for emulating Android devices
 - [XCode](https://developer.apple.com/xcode/): Useful for emulating iOS devices (only available on macOS)

## Additional Options
For people who want to go against the grain, here are some options for you.

### Text Editors
 - [Atom](https://atom.io/): Another popular text editor made by GitHub
 - [Brackets](http://brackets.io/): A text editor tailored for web design
 - [Vim](https://www.vim.org/): A text editor for masochists

### Terminals
 - [iTerm2](https://iterm2.com/): A popular terminal interface for macOS
