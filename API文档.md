- 所有请求都会返回数据库中的`ObjectId`
- `必要字段`必不可少；`可接受字段`视情况提供相应字段
- 所有`获取XXX`都有两种可能——在`账户管理`和`非账户管理`下获取——服务器端通过身份认证字段`Authentication`来识别用户处于哪种可能

# 注册 #

`POST /api/users`

请求体示例：

```
{
  "user":{
    "username": String,
    "email": String,
    "password": String
  }
}
```

必要字段`email`、`username`、`password`

不需要身份认证

请求返回：

```
{
	"user": {
		"email": String,
		"token": String,
		"username": String,
		"avatar": String
	}
}
```

> 注册的时候不上传头像，注册成功后才上传头像

# 登录 #

`POST /api/user/login`

请求体示例：

```
{
  "user":{
    "email": String,
    "password": String
  }
}
```

必要字段`email`、`password`

不需要身份认证

请求返回：

```
{
	"user": {
		"email": String,
		"token": String,
		"username": String,
		"avatar": String
	}
}
```

# 头像上传 #

`PUT /api/avatar`

请求体示例：

```
{
  "user":{
    "userId": 用户在数据库中的ObjectId
  }
}
```

必要字段`userId`

需要身份认证

请求返回：

```
{
	"user": {
		"avatar": String
	}
}
```

# 修改账户 #

`PUT /api/user`

请求体示例：

```
{
  "user":{
    "email": String,
    "password": String,
	"username": String
  }
}
```

可接受字段`email`、`username`、`password`

需要身份认证

请求返回：

```
{
	"user": {
		"email": String,
		"token": String,
		"username": String,
		"avatar": String
	}
}
```

# 发布博文 #

`POST /api/articles`

请求体示例：

```
{
  "article": {
    "title": String,
    "author": 作者在数据库中的ObjectId,
    "tagList": Array
  }
}
```

必要字段`title`、`author`、`tagList`

需要身份认证

请求返回

```
{
  "article": {
    "title": String,
    "bodyPath": String,
    "tagList": Array,
    "createdAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 修改博文 #

`PUT /api/articles/:id`

请求体示例：

```
{
  "article": {
    "title": String,
    "tagList": Array
  }
}
```

接受字段`title`、`tagList`

需要身份认证

请求返回

```
{
  "article": {
    "title": String,
    "bodyPath": String,
    "tagList": Array,
    "createdAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 删除博文 #

`DELETE /api/articles/:id`

请求体示例：

```
不需要请求体
```

需要身份认证

请求返回

```
{
  "article": {
    "title": String
  }
}
```

# 获取博文 #

`GET /api/articles`

可使用查询参数`tag`、`author`、`limit`过滤结果

- `?tag=...`。返回拥有该标签的文章
- `?author=...`。返回指定作者的文章
- `?limit=...`。指定返回文章的个数，默认10篇。在`账户管理`状态下直接返回`tag`和`author`限定的全部文章，不需要该参数

不需要身份认证

请求返回

```
{
  "articles":[{
    "title": String,
    "bodyPath": String,
    "tagList": Arrray,
    "createdAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },{
    "title": String,
    "bodyPath": String,
    "tagList": Arrray,
    "createdAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },...]
}
```

# 发布论文 #

`POST /api/papers`

请求体示例：

```
{
  "paper": {
    "title": String,
	"abstract": String,
	"periodicalName": String,
	"paperAuthor": Array,
	"keyWords": Array,
    "author": 上传者在数据库中的ObjectId,
    "issueAt": String
  }
}
```

必要字段`title`、`author`、`abstract`、`periodicalName`、`paperAuthor`、`keyWords`、`issueAt`

需要身份认证

请求返回

```
{
  "paper": {
    "title": String,
	"abstract": String,
	"periodicalName": String,
	"paperAuthor": Array,
	"keyWords": Array,
    "issueAt": String,
	"uploadAt": String,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 修改论文 #

`PUT /api/papers/:id`

请求体示例：

```
{
  "paper": {
    "title": String,
	"abstract": String,
	"periodicalName": String,
	"paperAuthor": Array,
	"keyWords": Array,
    "issueAt": String
  }
}
```

接受字段`title`、`abstract`、`periodicalName`、`paperAuthor`、`keyWords`、`issueAt`

需要身份认证

请求返回

```
{
  "paper": {
    "title": String,
	"abstract": String,
	"periodicalName": String,
	"paperAuthor": Array,
	"keyWords": Array,
    "issueAt": String,
	"uploadAt": String,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 删除论文 #

`DELETE /api/papers/:id`

请求体示例：

```
不需要请求体
```

需要身份认证

请求返回

```
{
  "paper": {
    "title": String
  }
}
```

# 获取论文 #

`GET /api/papers`

可使用查询参数`periodicalName`、`paperAuthor`、`limit`、`keyWords`、`author`过滤结果

- `?periodicalName=...`。期刊名称过滤
- `?paperAuthor=...`。论文作者过滤
- `?limit=...`。指定返回文章的个数，默认10篇
- `?keyWords=...`。论文关键字过滤
- `?author=...`。通过上传者过滤

在`账户管理`状态下只需要`author`参数以直接返回用户全部论文

不需要身份认证

请求返回

```
{
  "papers":[{
    "title": String,
	"abstract": String,
	"periodicalName": String,
	"paperAuthor": Array,
	"keyWords": Array,
    "issueAt": String,
	"uploadAt": String,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },{
    "title": String,
	"abstract": String,
	"periodicalName": String,
	"paperAuthor": Array,
	"keyWords": Array,
    "issueAt": String,
	"uploadAt": String,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },...]
}
```

# 发布网站链接和工具下载 #

`POST /api/kits`

请求体示例：

```
{
  "kit": {
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "author": 上传者在数据库中的ObjectId,
    "img": String
  }
}
```

必要字段`title`、`description`、`link`、`tag`、`author`、`img`

需要身份认证

请求返回

```
{
  "kit": {
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "img": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 修改网站链接和工具下载 #

`PUT /api/kits/:id`

请求体示例：

```
{
  "kit": {
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "author": 上传者在数据库中的ObjectId,
    "img": String
  }
}
```

可接受字段`title`、`abstract`、`periodicalName`、`paperAuthor`、`keyWords`、`issueAt`

需要身份认证

请求返回

```
{
  "kit": {
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "img": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 删除网站链接和工具下载 #

`DELETE /api/kits/:id`

请求体示例：

```
不需要请求体
```

需要身份认证

请求返回

```
{
  "kit": {
    "title": String
  }
}
```

# 获取网站链接和工具下载 #

`GET /api/kits`

如果用户进入`账户管理`，则必须加上`author`查询参数，以获取该用户上传的所有网站链接和工具下载，从而方便用户对它们进行编辑

除此之外直接获取全部网站链接和工具下载

- `?author=用户在数据库中的ObjectId`

`账户管理`状态下需要身份认证，其他情况不需要身份认证

请求返回

```
{
  "website":[{
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "img": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },{
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "img": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },...],
  "tools":[{
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "img": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },{
    "title": String,
	"description": String,
	"link": String,
	"tag": Number,
    "img": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },...]
}
```

# 发布培训视频 #

`POST /api/videos`

请求体示例：

```
{
  "video": {
    "title": String,
    "author": 上传者在数据库中的ObjectId
  }
}
```

必要字段`title`、`author`

需要身份认证

请求返回

```
{
  "video": {
    "title": String,
	"path": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 修改培训视频 #

`PUT /api/videos/:id`

请求体示例：

```
{
  "video": {
    "title": String
  }
}
```

可接受字段`title`

需要身份认证

请求返回

```
{
  "video": {
    "title": String,
	"path": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 删除培训视频 #

`DELETE /api/videos/:id`

请求体示例：

```
不需要请求体
```

需要身份认证

请求返回

```
{
  "video": {
    "title": String
  }
}
```

# 获取培训视频 #

`GET /api/videos`

如果用户进入`账户管理`，则必须加上`author`查询参数，以获取该用户上传的所有培训视频，从而方便用户对它们进行编辑

除此之外直接获取全部培训视频

- `?author=用户在数据库中的ObjectId`

不需要身份认证

请求返回

```
{
  "videos":[{
    "title": String,
	"path": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },{
    "title": String,
	"path": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },...]
}
```

# 发布竞赛 #

`POST /api/competitions`

请求体示例：

```
{
  "competition": {
    "title": String,
    "author": 上传者在数据库中的ObjectId
  }
}
```

必要字段`title`、`author`

需要身份认证

请求返回

```
{
  "competition": {
    "title": String,
	"bodyPath": String,
	"fileDownPath": String,
	"videoPath": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 修改竞赛 #

`PUT /api/competitions/:id`

请求体示例：

```
{
  "competition": {
    "title": String
  }
}
```

可接受字段`title`

需要身份认证

请求返回

```
{
  "competition": {
    "title": String,
	"bodyPath": String,
	"fileDownPath": String,
	"videoPath": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  }
}
```

# 删除竞赛 #

`DELETE /api/competitions/:id`

请求体示例：

```
不需要请求体
```

需要身份认证

请求返回

```
{
  "competition": {
    "title": String
  }
}
```

# 获取竞赛 #

`GET /api/competitions`

如果用户进入`账户管理`，则必须加上`author`查询参数，以获取该用户上传的所有竞赛，从而方便用户对它们进行编辑

除此之外直接获取全部竞赛

- `?author=用户在数据库中的ObjectId`

不需要身份认证

请求返回

```
{
  "competitions":[{
    "title": String,
	"bodyPath": String,
	"fileDownPath": String,
	"videoPath": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },{
    "title": String,
	"bodyPath": String,
	"fileDownPath": String,
	"videoPath": String,
	"createAt": Date,
    "author": {
      "username": String,
      "email": String,
      "avatar": String
    }
  },...]
}
```