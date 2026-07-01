import { IAgentAudioContent } from "./IAgentAudioContent";
import { IAgentFileContent } from "./IAgentFileContent";
import { IAgentImageContent } from "./IAgentImageContent";
import { IAgentTextContent } from "./IAgentTextContent";

/**
 * 멀티모달 {@link IAgentMessage} content 배열의 한 part.
 *
 * `type`으로 판별되는 discriminated union이다. agentica의
 * `AgenticaUserMessageContent`(`text | image | file | audio`)를 미러링하여 기존 멀티모달
 * 입력이 그대로 이식된다. 이 union은 additive하므로, 모델이 생성하는 미디어(`image`/`file`)도 나중에
 * breaking 없이 합류할 수 있다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentMessageContent =
  | IAgentTextContent
  | IAgentImageContent
  | IAgentFileContent
  | IAgentAudioContent;
