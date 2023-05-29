## 部署多個app
firebase.json加入

1. 
{
  "hosting": {
    "site": "goody-system-admin",
    "public": "public",
    ...
  }
}

2. firebase deploy --only hosting:goody-system-admin
