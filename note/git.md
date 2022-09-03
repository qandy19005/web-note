Q: Commit返回
1. 查看Commit
 git log 
2. 從設定HEAD
 git reset HEAD^ // 從目前的 HEAD 倒退1個 Commit
 git reset HEAD~5 // 從目前的 HEAD 倒退5個 Commit
 git reset ffa7c0c // 設定 HEAD 為 ffa7c0c 這一個 Commit
3. 強制送到遠端分支
 git push origin 分支名稱 --force
4. 查看遠端分支 Commit
 git log origin/分支名稱

Q: Permission denied
1. git config --global --list (檢查帳號)
2. git config --global user.name qandy19005 (設定帳號)
3. git config --global user.email qandy19005@gmail.com (設定信箱)
4. ssh-keygen -t rsa -C qandy19005@gmail.com (產生sshkey Enter到底)
5. /Users/***/.ssh (key存放的位置)