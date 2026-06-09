import { DeepPartial, IValidation } from "@typia/interface";

/**
 * {@link IAgentValidation.watch}가 내보내는 하나의 증분 업데이트.
 *
 * {@link phase}(BAML의 `StreamState`에서 가져옴)는 소비자가 _아직 streaming 중_ / _validated_
 * / _locked_ / _failed_를 구별하게 한다 — 평평한 `DeepPartial<T>` 스냅샷에는 없는 semantic 상태
 * 신호.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Streaming 중인 완성형 타입.
 */
export interface IAgentValidationState<T = unknown> {
  /**
   * 이 스냅샷의 lifecycle 위치:
   *
   * - `"streaming"` — 토큰이 더 온다. 스냅샷은 잠정.
   * - `"validated"` — 현재 prefix가 validation 통과(lock 후보).
   * - `"locked"` — prefix가 checkpoint됨. continuation에도 안전.
   * - `"failed"` — 현재 prefix가 스키마 위반(feedback 후보).
   */
  phase: "streaming" | "validated" | "locked" | "failed";

  /** 이 시점의 복구된 partial 값. */
  snapshot: DeepPartial<T>;

  /** 이번 tick에 harness가 validation을 돌렸을 때의 결과. tick 사이 단순 streaming 중에는 `null`. */
  validation: IValidation<T> | null;

  /** 직전 tick 이후 추가된 raw 텍스트(echo/logging용). */
  delta?: string | undefined;
}
