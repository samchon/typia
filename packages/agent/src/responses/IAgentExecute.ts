import { IAgentOperation } from "../structures/IAgentOperation";

/**
 * {@link IAgentTool} 실행 기록 — {@link IAgentTool.execute}가 resolve하는 값이자, 모델이 설명하도록
 * history에 기록되는 것.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Arguments 함수에 전달된 validated 인자 타입.
 * @template Result 함수의 반환 타입.
 */
export interface IAgentExecute<Arguments = unknown, Result = unknown> {
  /** 발신 {@link IAgentTool.id}와 일치하는 상관 id. */
  id: string;

  /** 어떤 operation이 실행됐는가. */
  operation: IAgentOperation;

  /** 함수가 호출된 validated 인자. */
  arguments: Arguments;

  /**
   * 성공 시 함수의 반환값.
   *
   * `"output"` 프로토콜 operation(structured output, executor 없음)에서는 validated
   * payload 자체.
   */
  value: Result;

  /** 실행이 throw 없이 끝났는지. */
  success: boolean;

  /** {@link success}가 `false`일 때 던져진 에러. */
  error?: unknown;
}
