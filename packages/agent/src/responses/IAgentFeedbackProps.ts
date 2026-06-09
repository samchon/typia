import { IValidation } from "@typia/interface";

/**
 * {@link IAgentTool.feedback} correction 라운드를 위한 추가 입력.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Arguments 교정 대상 함수의 인자 타입.
 */
export interface IAgentFeedbackProps<Arguments = unknown> {
  /** Correction prompt에 덧붙일 사람이 읽을 수 있는 안내(자동 생성 에러 주석 위에). 예: 모델이 위반한 비즈니스 규칙. */
  reason?: string | undefined;

  /**
   * 현재 snapshot을 재검증하는 대신 feedback할 사전 계산 validation. 커스텀 validator가 실패를 만들었을 때
   * 유용.
   */
  validation?: IValidation<Arguments> | undefined;
}
