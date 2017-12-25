/*
 * @Author: Evan 
 * @Date: 2017-12-20 16:36:13 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-25 10:39:05
 */

// 需要操作系统上安装了git, 以便执行Git 命令
const simpleGit = require ('simple-get/primse');

const WORKDIR = 'path/to/project'; // optional , default to current directory

let git = simpleGit (WORKDIR);

// 授权
const USER = 'something';
const PASS = 'somewhere';
const REPO = 'github.com/username/private-repo';

const remote = `https://${USER}:${PASS}@${REPO}`;

git ()
  .silent (true)
  .clone (remote)
  .then (() => console.log ('finished'))
  .catch (err => console.error ('failed: ', err));

git ().pull ('origin', 'master', {'--no-rebase': null});
// results in 'git pull origin master --no-rebase'

// results in 'git pull origin master --rebase=true'
git ().pull ('origin', 'master', {'--rebase': 'true'});
