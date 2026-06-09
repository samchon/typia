/**
 * Agent 턴의 자유 서술 텍스트 part — {@link IAgentResponse}의 `r.type === "text"` 분기.
 *
 * Streaming 산문 채널이다. assistant 답변이거나, tool 결과 설명("describe")이다. {@link stream}으로
 * token 단위 소비하거나 {@link join}으로 전체를 await한다:
 *
 * ```ts
 * for await (const r of execution)
 *   if (r.type === "text")
 *     for await (const piece of r.stream()) process.stdout.write(piece);
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentText {
  /** 판별자(discriminator). */
  type: "text";

  /** 턴 내 이 part의 안정 id(event/telemetry 상관용). */
  id: string;

  /** 항상 assistant. 사용자 텍스트는 입력이지 response part가 아니다. */
  role: "assistant";

  /**
   * 이 텍스트가 존재하는 이유.
   *
   * - `"answer"` — 사용자에 대한 모델의 직접 응답.
   * - `"describe"` — 하나 이상의 tool 결과에 대한 자연어 설명(agentica의 "describe" 단계). 같은 턴에서
   *   실행 이후에 나온다.
   */
  purpose: "answer" | "describe";

  /**
   * 도착하는 대로 텍스트 token 조각을 streaming한다.
   *
   * 각 yield는 증분 delta(누적 텍스트 아님)다. part가 끝나면 iterable이 완료된다. 일찍 중단해도 안전하며
   * harness가 정리한다.
   */
  stream(): AsyncIterable<string>;

  /**
   * 완성된 텍스트를 await한다.
   *
   * 내부적으로 {@link stream}을 drain하여 이어붙인 결과를 resolve한다. `stream()`과 `join()`을 함께
   * 호출해도 같은 버퍼를 공유하므로 안전하다.
   */
  join(): Promise<string>;
}
