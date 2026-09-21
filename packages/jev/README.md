# `@typia/jev`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

[Jev](https://docs.typesafe.ai) evaluation model integration for [`typia`](https://github.com/samchon/typia).

Converts the questions of `typia.llm.evaluation<T>()` to Jev's wire format, the format of TypeSafe's API and SDK and of OpenRouter's Decisions API. The neutral questions spell the yes/no question `"boolean"`; Jev spells it `"noul"`. Choice and score questions are identical, and `decode()` accepts Jev's native answers as they are.

## Setup

```bash
npm install @typia/jev typia @typesafe-ai/sdk
npm install -D ttsc typescript@rc
```

## Usage

```typescript
import { TypeSafeClient } from "@typesafe-ai/sdk";
import { toJevQuestions } from "@typia/jev";
import typia from "typia";

interface ITriage {
  /** Is the ticket urgent? */
  urgent: boolean;

  /** Which team owns the ticket? */
  team: "billing" | "technical";
}

const evaluation = typia.llm.evaluation<ITriage>();
const client = new TypeSafeClient();
const { answers } = await client.systemOne({
  state: "The payment page crashes for every customer.",
  questions: toJevQuestions(evaluation.questions),
});
const result = evaluation.decode(answers); // IValidation<ITriage>
```

The direct TypeSafe SDK does not return an AI SDK-style `rounding` declaration, so distribution checks use a strict tolerance. Pass a precision as the second argument only when your endpoint explicitly guarantees it.

Through Vercel AI SDK, pass `evaluation.questions` to `experimental_evaluate()` as they are; its TypeSafe and OpenRouter providers convert them.

See the [guide](https://typia.io/docs/utilization/jev) for details.
