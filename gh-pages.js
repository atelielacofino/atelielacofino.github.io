import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
    branch: 'gh-pages',
    repo: 'https://github.com/atelielacofino/atelielacofino.github.io.git', // Update to point to your repository
    user: {
      name: 'Keylla Farina', // update to use your name
      email: 'keyllafarina@gmail.com' // Update to use your email
    },
    dotfiles: true,
    add: true,
  }, () => { console.log('Deploy Complete!'); }
);