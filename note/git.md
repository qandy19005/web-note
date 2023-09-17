Q: Branch 重新命名
git branch -m {new name}

Q: Branch 刪除
git branch -D {name}

Q: Push步驟
1. git status
2. git add .
3. git commit -m ""
4. git push origin -u asa (Feature也可用)

Q: 查看Commit
 git log 

Q: 從設定HEAD
 git reset HEAD^ // 從目前的 HEAD 倒退1個 Commit
 git reset HEAD~5 // 從目前的 HEAD 倒退5個 Commit
 git reset ffa7c0c // 設定 HEAD 為 ffa7c0c 這一個 Commit

Q: Commit覆蓋
 git commit --amend
 git push origin 分支名稱 --force

Q: 強制送到遠端分支
 git push origin 分支名稱 --force

Q: 查看遠端分支 Commit
 git log origin/分支名稱

Q: 查看遠端所有分之
 git branch -r

Q: 刪除遠端分支
 git push origin :分支名稱

Q: 安裝遠端特定分支
npm install "https://github.com/shakacode/bootstrap-loader.git#branch-name" --save

Q: Commit返回 reset (soft hard mixed)
 commit退回至遠端develop
 git reset --hard origin/develop 
 
Q: 合併commit
1. git rebase -i {後一個commit}
2. pick > squash

Q: Permission denied
1. git config --global --list (檢查帳號)
2. git config --global user.name qandy19005 (設定帳號)
3. git config --global user.email qandy19005@gmail.com (設定信箱)
4. ssh-keygen -t rsa -C qandy19005@gmail.com (產生sshkey Enter到底)
5. /Users/***/.ssh (key存放的位置) (安裝的時候會顯示路徑)

Q: Stash暫存步驟
1. git stash save
2. git stash list 顯示所有暫存
3. git stash pop 取得最新
4. git stash drop 刪除最新
5. git stash clear 清空所有暫存

- Git flow
develop > release(for test) > master > develop

Q: rebase vs merge
https://medium.com/starbugs/git-%E6%88%91%E4%BB%A5%E7%82%BA%E7%9A%84-git-rebase-%E8%88%87%E5%92%8C-git-merge-%E5%81%9A%E5%90%88%E4%BD%B5%E5%88%86%E6%94%AF%E7%9A%84%E5%B7%AE%E7%95%B0-cacd3f45294d