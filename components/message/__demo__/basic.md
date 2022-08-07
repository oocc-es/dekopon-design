---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

警告提示，展现需要关注的信息，适用于简短的警告提示。

## en-US

Warning prompts. Suitable for displaying short warning prompts in a way that attracts attention.

```js
import { Message } from '@dekopon/design';

const App = () => {
  return <>
  <button onClick={()=>Message.success("success")}>success</button>
  <button onClick={()=>Message.info("info")}>info</button>
  </>
}

export default App
```