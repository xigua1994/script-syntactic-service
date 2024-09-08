# script-syntactic-service

## Overview

Script Syntactic Service 是一个强大的在线服务，旨在通过简单的 API 调用，对 JavaScript 脚本进行语法检查、API 处理、兼容性适配以及压缩。它通过一个简单的 HTTPS 请求，接受几个关键参数， 就实现了对目标 scrip 的语法转换。

## Features

- **语法检查**：自动检测并报告脚本中的语法错误。
- **API 处理**：优化和标准化脚本中的 API 调用。
- **兼容性适配**：确保脚本在指定的浏览器或设备范围内正常运行。
- **压缩**：可选功能，减少脚本文件大小，加快加载速度。

## API Usage

要使用 Script Syntactic Service，你可以通过构建一个 HTTP GET 请求来实现。以下是请求的基本格式：

```
<script src="https://script-syntactic-service?query"></script>
```

### Query Parameters

- **url** (required): 需要处理的 JavaScript 脚本的 URL。
- **callback** (optional): 加载 JavaScript 脚本后的回调函数。
- **failback** (optional): 加载/压缩 JavaScript 脚本失败时的回调函数。
- **target** (optional): 指定需要兼容的浏览器或设备范围。
- **minify** (optional): 是否需要压缩脚本，值为`true`或`false`。

### Example

假设你有一个 JavaScript 脚本位于`https://example.com/script.js`，你希望对其进行语法检查和压缩，并且确保它在 IE11 及以上版本的浏览器中兼容。你可以构建如下请求：

```
https://script-syntactic-service?url=https://example.com/script.js&callback=myCallback&failback=myFailback&target=IE11&minify=true
```

## Response

服务将返回处理过的 JavaScript 脚本。如果指定了`callback`参数，返回的脚本将被包裹在该回调函数中。如果处理失败，并且指定了`failback`参数，将执行该回调函数。

### Example Response

如果请求成功，你可能会收到类似以下的响应：

```javascript
myCallback(function () {
  // 处理过的脚本内容
})
```

如果处理失败，并且有`failback`回调：

```javascript
myFailback(function () {
  // 错误处理逻辑
})
```

## Limitations

- 请确保提供的 URL 是有效的，并且脚本可以被公开访问。
- 服务的响应时间可能会根据脚本的大小和复杂性而有所不同。
- 兼容性适配功能依赖于最新的浏览器数据，可能不包括所有边缘案例。

## Support

如果你在使用 Script Syntactic Service 时遇到任何问题，或者有任何功能请求，欢迎提交 issue 到我们的[GitHub 仓库](https://github.com/xigua1994/script-syntactic-service)。

## License

Script Syntactic Service is released under the [MIT License](LICENSE).
