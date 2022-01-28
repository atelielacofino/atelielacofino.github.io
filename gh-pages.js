import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
    branch: 'gh-pages',
    repo: 'https://github.com/maycrodrigues/atelie-laco-fino.git', // Update to point to your repository
    user: {
      name: 'Mayc Rodrigues', // update to use your name
      email: 'maycrodriguess@gmail.com' // Update to use your email
    },
    dotfiles: true
  }, () => { console.log('Deploy Complete!'); }
);