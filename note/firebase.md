## Tutorial
- publish Nuxt3 project - https://www.youtube.com/watch?v=AzO-KVMx7lo

## Note
 - 部署多個app
 1. Step 1
  firebase.json加入
  ``` json
  {
    "hosting": {
      "site": "${site-name}",
      "public": "public",
      ...
    }
  }
  ```
2. Step 2 <br />
  firebase deploy --only hosting:${site-name}
