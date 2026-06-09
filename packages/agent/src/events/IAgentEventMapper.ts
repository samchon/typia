import { IAgentContinuationEvent } from "./IAgentContinuationEvent";
import { IAgentParseEvent } from "./IAgentParseEvent";
import { IAgentRequestEvent } from "./IAgentRequestEvent";
import { IAgentResponseEvent } from "./IAgentResponseEvent";
import { IAgentUsageEvent } from "./IAgentUsageEvent";
import { IAgentValidateEvent } from "./IAgentValidateEvent";

/**
 * 판별자 → 이벤트 매핑. {@link IAgent.on}/{@link IAgent.off}의 타입 안전 listener 디스패치에 쓰인다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentEventMapper {
  request: IAgentRequestEvent;
  response: IAgentResponseEvent;
  validate: IAgentValidateEvent;
  parse: IAgentParseEvent;
  continuation: IAgentContinuationEvent;
  usage: IAgentUsageEvent;
}
