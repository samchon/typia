import { DeepPartial, IValidation } from "@typia/interface";

import { IAgentValidationState } from "./IAgentValidationState";

/**
 * **Incremental validation** 표면 — `@typia/agent`의 심장. 모든 streamed structured
 * payload({@link IAgentTool}의 arguments, structured-output 답변)가 공유한다.
 *
 * 통상적 function calling이 `generate-all → validate-once`인 반면, 이 인터페이스는 harness의
 * 뒤집힌 루프 — `generate → parse partial → validate prefix → lock → continue` — 를
 * 소비 가능한 view로 노출한다:
 *
 * - {@link snapshot}: 누적 token prefix로부터 typia lenient parser가 복구한 최신
 *   `DeepPartial<T>`(닫히지 않은 괄호, truncation, double-stringified union 등을 복구).
 * - {@link locked}: 마지막으로 _validated_된 checkpoint. 외부 상태다. output-token 천장이 스트림을
 *   끊어도 locked prefix는 **버려지지 않고** harness가 그로부터 새 completion을 이어간다.
 * - {@link watch}: `{ snapshot, validation, phase }` 업데이트를 streaming하여 구조가 채워지는 대로
 *   렌더/반응 가능 — 다른 SDK가 내놓는 미검증 whole-snapshot이 아니라 typed _이며 validated_된
 *   partial.
 * - {@link validate} / {@link success}: streaming(continuation 포함)이 끝나면 resolve.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Streaming 중인 완성형 타입.
 */
export interface IAgentValidation<T = unknown> {
  /** 최신 복구 partial 값(매 parse cadence tick마다 커질 수 있음). */
  snapshot(): DeepPartial<T>;

  /**
   * 마지막 validated checkpoint — token 천장 절단을 견디고 continuation을 seed하는 prefix. 첫
   * prefix가 validate되기 전엔 비어 있다.
   */
  locked(): DeepPartial<T>;

  /**
   * 구조가 채워지는 과정을 증분으로 관찰한다.
   *
   * 값이 안정될 때까지 매 parse/validate tick마다 새 {@link IAgentValidationState}를 내보낸다.
   * 점진적 UI에 이상적.
   */
  watch(): AsyncIterable<IAgentValidationState<T>>;

  /**
   * 최종 복구 값을 validate한다.
   *
   * Streaming(continuation 포함)이 끝나길 기다린 뒤 typia 생성 validator를 돌린다. 반환될 수 있는
   * `IValidation.IFailure`는 정밀한 `path`/`expected`/`value` 에러를 담아
   * {@link IAgentTool.feedback}에 곧바로 쓸 수 있다.
   */
  validate(): Promise<IValidation<T>>;

  /** 편의: `(await validate()).success`. */
  success(): Promise<boolean>;
}
