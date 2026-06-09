import { IAgentText } from "./IAgentText";
import { IAgentTool } from "./IAgentTool";

/**
 * Agent의 streamed 턴의 한 part — `for await`로 순회하는 요소 타입. mandate의 루프가 읽는 그대로
 * `type`으로 판별되는 discriminated union이다:
 *
 * ```ts
 * for await (const r of await agent.conversate("Yaho~")) {
 *   if (r.type === "tool") { ... }       // IAgentTool
 *   else if (r.type === "text") { ... }  // IAgentText
 * }
 * ```
 *
 * 이 union은 **additive**하다. 향후 멤버(`"reasoning"`, `"file"`, `"source"`,
 * `"error"`)가 두 핵심 분기를 건드리지 않고 합류할 수 있다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Arguments Tool part 인자 타입.
 * @template Result Tool part 반환 타입.
 */
export type IAgentResponse<Arguments = unknown, Result = unknown> =
  | IAgentText
  | IAgentTool<Arguments, Result>;
