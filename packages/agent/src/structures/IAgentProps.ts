import { IAgentHistoryJson } from "../histories/IAgentHistoryJson";
import { IAgentAdapter } from "./IAgentAdapter";
import { IAgentConfig } from "./IAgentConfig";
import { IAgentController } from "./IAgentController";
import { IAgentTokenUsage } from "./IAgentTokenUsage";

/**
 * {@link TypiaAgent}(및 모든 {@link IAgent})의 생성자 속성.
 *
 * 필수는 {@link adapter}뿐이라 가장 작은 agent는 `new TypiaAgent({ adapter })`다.
 * {@link controllers}를 더하면 function-calling agent가 되고, {@link histories}를 넘기면 이전
 * 대화를 재개한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentProps {
  /** 벤더 중립 LLM adapter(OpenAI, Vercel 등) — 유일한 필수 필드, provider 교체 한 줄. */
  adapter: IAgentAdapter;

  /**
   * Agent가 호출할 수 있는 함수 제공자. 각각 {@link IAgentOperation}으로 평탄화되며 충돌 이름은 중복 제거된다.
   * 순수 대화/structured-output agent면 생략.
   */
  controllers?: IAgentController[] | undefined;

  /** 동작 튜닝. 생략하면 `MicroAgentica` 등가의 기본값. */
  config?: IAgentConfig | undefined;

  /**
   * 재개할 직렬화된 이전 대화.
   *
   * 이전 턴의 {@link IAgentTurn.histories}로부터 영속화한 {@link IAgentHistoryJson} 배열을 넘기면
   * agent가 live history로 rehydrate한다.
   */
  histories?: IAgentHistoryJson[] | undefined;

  /** 누적할 seed 토큰 usage(세션 간 budgeting용). */
  tokenUsage?: IAgentTokenUsage | undefined;
}
