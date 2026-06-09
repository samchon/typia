import { IAgentMessageContent } from "./IAgentMessageContent";

/**
 * {@link IAgentAdapter}로 전달되는 중립 채팅 메시지.
 *
 * OpenAI의 `ChatCompletionMessageParam`, Vercel의 `ModelMessage`에 대응하는 provider
 * 중립 타입이다. harness는 매 턴 {@link IAgentHistory}로부터 이 배열을 구성하고, adapter가 경계에서
 * backend 고유 형태로 변환한다. vendor 타입을 재노출하지 않고 자체 메시지 타입을 두는 것이, 하나의 agent 코드가
 * adapter를 갈아끼워도 그대로 도는 이유다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentMessage {
  /** 화자 역할. */
  role: "system" | "developer" | "user" | "assistant" | "tool";

  /** 일반 텍스트(string) 또는 멀티모달 part 배열. */
  content: string | IAgentMessageContent[];

  /** Tool/function 결과를 그 호출에 묶기 위한 상관 id(`role: "tool"`에서 사용). */
  toolCallId?: string | undefined;
}
