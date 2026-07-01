import { IAgentTokenUsageInput } from "./IAgentTokenUsageInput";
import { IAgentTokenUsageOutput } from "./IAgentTokenUsageOutput";

/**
 * 한 턴 또는 누적 대화의 토큰 회계.
 *
 * Agentica와 마찬가지로 수치는 추정이 아니라 provider가 **보고**한 값이다(streaming usage 이벤트 경유).
 * {@link continuations}는 `@typia/agent` 고유 카운터로, 하나의 논리적 답변이 output-token 천장을 넘어
 * locked checkpoint로부터 몇 번 이어졌는지를 기록한다. 0이 아니면 그 답변이 단일 completion의 max output
 * 토큰을 초과해 이어 붙여졌다는 뜻 — 이 라이브러리를 차별화하는 바로 그 feature다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentTokenUsage {
  /** 입력 + 출력 토큰의 총합. */
  total: number;

  /** 입력(프롬프트) 토큰 분해. */
  input: IAgentTokenUsageInput;

  /** 출력(completion) 토큰 분해. */
  output: IAgentTokenUsageOutput;

  /**
   * 이 턴/누적에서 수행된 ceiling-continuation 횟수.
   *
   * `0` ⇒ 모든 답변이 단일 completion 안에 들어맞음. `> 0` ⇒ harness가 `length` finish를 감지하고
   * locked prefix로부터 이어 붙였음.
   */
  continuations: number;
}
