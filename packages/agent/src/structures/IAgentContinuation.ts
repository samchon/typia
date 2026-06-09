/**
 * Output-token 천장 continuation 정책 — 이 라이브러리의 핵심 동작.
 *
 * Completion이 구조 중간에 `length` finish로 끝나면 harness는 마지막 locked checkpoint로부터 이어
 * 붙인다. 이 타입이 그 continuation을 제한·조형한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentContinuation {
  /**
   * `length` finish를 넘어 이어 붙일지 여부. 기본 `true` — 이게 feature다. `false`로 두면
   * truncation에서 즉시 실패한다.
   */
  enabled?: boolean | undefined;

  /** 하나의 논리적 답변에 대한 최대 continuation 횟수. 기본 `8`. */
  limit?: number | undefined;

  /**
   * 다음 completion을 locked prefix로부터 어떻게 seed할지.
   *
   * - `"prefill"`(기본) — locked 텍스트로 assistant 턴을 이어가게 하고 계속 쓰게 한다.
   * - `"remainder"` — locked partial을 맥락으로 주고 아직 안 채운 필드만 다시 요청한다.
   */
  strategy?: "prefill" | "remainder" | undefined;
}
