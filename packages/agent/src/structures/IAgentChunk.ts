import { IAgentErrorChunk } from "./IAgentErrorChunk";
import { IAgentFinishChunk } from "./IAgentFinishChunk";
import { IAgentRawChunk } from "./IAgentRawChunk";
import { IAgentTextDeltaChunk } from "./IAgentTextDeltaChunk";

/**
 * {@link IAgentAdapter}가 내보내는 한 개의 streamed 이벤트. `type`으로 판별된다.
 *
 * 일부러 최소로 유지한다. harness가 _텍스트_를 streaming하므로 union은 `text-delta` + `finish`가
 * 지배하며, 매끄럽게 매핑되지 않는 provider 고유 이벤트는 최저공통분모 함정 대신 `raw`로 흘려보낸다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentChunk =
  | IAgentTextDeltaChunk
  | IAgentFinishChunk
  | IAgentErrorChunk
  | IAgentRawChunk;
