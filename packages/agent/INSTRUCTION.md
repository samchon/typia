나는 `@typia/agent` 라이브러리를 만들고자 하노라.

다음 두 가지 아티클을 핵심 철학으로 삼을 것이며, 이 중 특히 Lenient JSDN parsing + function calling 내지 structured output의 streaming을 위해 달리는 것이니라.

- https://typia.io/blog/function-calling-harness-qwen-meetup-korea/
- https://typia.io/blog/function-calling-harness-2-cot-compliance/

그리고 `D:/github/wrtnlabs/agentica`를 보면, 이벤트에 기반하여 functino calling 프레임워크를 만들었음을 알 수 있다. `@typia/agent`도 이 중 `MicroAgentica`와 같은 기능을 만들 것이되, agentica처럼 tools 기능을 쓰는게 아니라, text streaming response를 통해 출력 가능 최대 토큰량의 제한을 뛰어넘을 것이며, function callling harness에 나오는 incremental validation을 이룩할 것이다.

더하여 대략 아래와 같은 유즈케이스를 이룩하고자 하노라. `for await` statement와 discriminated union 타입을 아주 적극적으로 활용하고자 함이니.

```typescript
const agent = new TypiaAgent({ ... });
const response = await agent.conversate("Yaho~");
for await (const r of response) {
  if (r.type === "tool") {
    if (await r.success() === false) {
      await r.feedback();
    } else {
      await r.execute();
    }
  } else if (r.type === "text") {
    for await (const piece of r.stream()) {
      consoole.log("piece", piece);
    }
  }
}
```

agentica처럼 OpenAI SDK를 사용하는 형태도 좋고, vercel AI SDK를 사용하는 형태도 좋고, 둘 다 사용 가능한 어댑터여도 좋다. 가장 중요한것은 이러한 인터페이스 설계를 얼마나 합리적으로 하냐겠지? 간결명료하여 누구나 쉽게 사용할 수 있으면서도 확장성 있는 인터페이스, 그것이 너가 가장 처음에 할 일이다.

따라서 `".wiki"` 폴더를 만들고, 거기에 다양한 래퍼런스 자료를 조사하고 사고 실험해가며, 지식대백과를 누적하라. 그리고 최고의 인터페이스를 만들어, 그야말로 모든게 다 가능해지게 하여라. Agentica 외 모던 AI 프레임워크들도 조사해보고, 필요하면 git clone 하여 소스코드도 까 보고 (`".repositories/"` 폴더에 클론하면 gitignore 되어있어서 괜찮음), 때때로 Claude Code의 소스코드도 분석하려무나(`D:/github/contributions/claude-code`).

이래저래 OpenAI SDK를 쓰더라도, Vercel SDK는 좋은 참고자료가 될 것이다. 이게 메모리까지 제공하는지 아니면 단순 저수준 API만 제공하는지 잘 모르겠다만, 모든 가능성을 열어두고 조사하라. 물론, `@typia/agent`는 function calling harness가 메인이니, 이 부분이 가장 잘 다루어져야 할 것이다. 번외로 함수의 수가 엄청 많을 때, 이를 어찌 최적화할지도 고민해보거라.

그리하여 최고 품질의 `@typia/agent` 아키텍처이자 인터페이스를 도출해보니라. 그리고 그것을 packages/agent에 그야말로 인터페이스 타입으로써만 정의해보거라. 각각 타입마다 독립 파일을 가지면 되노니, 최선을 다하여보거라. 또한 `packages/agent/ARCHITECTURE.md`에, 이 모든걸 총정리한 보고서를 쓰거라.
