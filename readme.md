# Cobalt2 for Hyper

![](http://wes.io/qfOK/content)

## Installing

1. Open your `~/.hyper.js` config file with something like `subl ~/.hyper.js` or `vim ~/.hyper.js`.
2. Add `hyperterm-cobalt2-theme` to your `plugins` array. Kinda like this:

	```js
	plugins: [
	  'hyperterm-cobalt2-theme'
	],
	```
3. Enjoy your life

## Settings

By default the editor comes with a border, you can turn it off, or change it's colour with these settings in your config file. `Hyper → Preferences`


```js
// omit or set true to show. set false to remove it
wickedBorder: true,
// change the colour here
wickedBorderColor: '#ffc600',
```

## FAQ

### Q: What font is that? I Love It!
**A:** Operator Mono. I wrote a bit of info here → <http://wesbos.com/uses>

### Q: How do I get Powerline working with a non-patched font?
**A:** Use CSS to fall back to a different font when the character isn't supported:

```
fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace'
```

### Q: I HATE THAT FONT SO MUCH, I HATE YOU AND I WANT YOU TO KNOW IT
**A:** k 😘

### Q: How did you get the cool prompt?
**A:** This isn't part of iTerm or Hyperterm, it has to do with the shell that you are using. I'm using ZSH along with [Cobalt 2 for ZSH](https://github.com/wesbos/Cobalt2-iterm/). I've got a whole free video series on this if you are interested:  <http://CommandLinePowerUser.com>

### Q: Can I make edits?
**A:** Yes please! Still working on this. I might not accept your edits, but I probably will.

## You might also like

🔥 [Cobalt2 for VS Code](https://github.com/wesbos/cobalt2-vscode)

🔥 [Cobalt2 for Sublime Text](https://github.com/wesbos/Cobalt2)

🔥 [Cobalt2 for Atom](https://github.com/wesbos/cobalt2-atom)

🔥 [Cobalt 2 for ZSH](https://github.com/wesbos/Cobalt2-iterm/)

🔥 [Cobalt 2 for iTerm](https://github.com/wesbos/Cobalt2-iterm/)

🔥 [Cobalt 2 for Alfred](https://github.com/wesbos/Cobalt2-Alfred-Theme)

🔥 [Cobalt 2 for Slack](https://github.com/wesbos/Cobalt2-slack)
