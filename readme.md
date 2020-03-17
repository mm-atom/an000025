# 微信-是否为违法图片

## 参数

名称|说明
---|---
file|要检测的图片文件地址，格式支持PNG、JPEG、JPG、GIF，图片尺寸不超过 750px x 1334px

## 配置

* 需在项目下的mm.json文件中配置`wx.appid`，`wx.appsecret`。
* wx.appid：小程序唯一凭证，即 AppID。
* wx.appsecret：小程序唯一凭证密钥，即 AppSecret。

```json
{
	"wx": {
		"appid": "xxx",
		"appsecret": "xxx"
	}
}
```
