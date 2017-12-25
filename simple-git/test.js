const gitP = require('simple-git/promise');

const USER = '2686465170@qq.com';
const PASS = 'xuzhijian101';
const REPO = 'github.com/EvanXzj/simple_git.git';

const remote = `https://${USER}:${PASS}@${REPO}`;

let git = gitP(__dirname);

// 配合 github 授权试试看， 查看ginit REPO
git()
  .init()
  .add('./*')
  .commit('first commit - simple-git module')
  .addRemote('origin', remote)
  .push('origin', 'master');

// let init = async () => {
//   let status,
//     isRepo = false;
//   try {
//     isRepo = await git.checkIsRepo();
//     console.log(isRepo);
//     if (!isRepo) {
//       await git.init();
//     }

//     await git.add('./*');
//     await git.commit('first commit - simple-git module');
//     await git.removeRemote('origin');
//     await git.addRemote('origin', remote);
//     console.log(2)
//     await git.push('origin', 'master');
//     console.log(3);
//     status = await git.status();
//     console.log(4);
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(5);
//   console.log(`status - ${status}`);
// }

// init();
