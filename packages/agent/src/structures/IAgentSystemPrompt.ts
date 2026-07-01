/**
 * Harness의 내장 system prompt를 단계별로 덮어쓰는 override.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentSystemPrompt {
  /** 주 대화/결정 prompt. */
  main?: string | ((next: unknown) => string);

  /** 함수 선택 prompt(selector가 개입할 때만 사용). */
  select?: string | ((next: unknown) => string);

  /** 결과 설명("describe") prompt. */
  describe?: string | ((next: unknown) => string);
}
