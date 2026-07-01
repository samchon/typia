import { IAgentContinuationEvent } from "./IAgentContinuationEvent";
import { IAgentParseEvent } from "./IAgentParseEvent";
import { IAgentRequestEvent } from "./IAgentRequestEvent";
import { IAgentResponseEvent } from "./IAgentResponseEvent";
import { IAgentUsageEvent } from "./IAgentUsageEvent";
import { IAgentValidateEvent } from "./IAgentValidateEvent";

/**
 * **부차적인**, 횡단 telemetry 채널 — 주 content 스트림({@link IAgentExecution})과 구분된다.
 *
 * Async-iterable은 _대화 content_(text, tool 호출)를 나른다. 이벤트는 직접 계측해야 했을
 * *배관(plumbing)*을 나른다. 즉 raw adapter request/response, 매 validation 시도, 매
 * lenient-parse 복구, usage 갱신, ceiling-continuation. content는 의도적으로 여기에 **중복되지
 * 않는다** — 같은 메시지가 두 채널로 오는 "event soup"를 피한다.
 * {@link IAgent.on}/{@link IAgent.off}로 구독한다.
 *
 * `type`으로 판별된다. {@link IAgentEventMapper}가 `on`/`off`의 타입별 listener 타이핑을 준다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentEvent =
  | IAgentRequestEvent
  | IAgentResponseEvent
  | IAgentValidateEvent
  | IAgentParseEvent
  | IAgentContinuationEvent
  | IAgentUsageEvent;
