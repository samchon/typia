import { ILlmFunction } from "@typia/interface";

/**
 * 모든 {@link IAgentOperation} 변형이 공유하는 공통 헤드.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Protocol 프로토콜 판별자 리터럴.
 */
export interface IAgentOperationBase<Protocol extends string> {
  /** 프로토콜 판별자(출처 controller와 일치). */
  protocol: Protocol;

  /** 출처 controller 이름. */
  controller: string;

  /**
   * Agent 내 고유 함수 이름.
   *
   * Controller 함수명에서 파생되어 controller 간 중복 제거된다. 모델이 이 함수를 호출할 때 내보내는 이름이다.
   */
  name: string;

  /** Function calling 스키마(parameters/output/parse/validate/coerce). */
  function: ILlmFunction;
}
