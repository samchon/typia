import { IAgentEventMapper } from "./events/IAgentEventMapper";
import { IAgentHistory } from "./histories/IAgentHistory";
import { IAgentExecution } from "./responses/IAgentExecution";
import { IAgentAdapter } from "./structures/IAgentAdapter";
import { IAgentConfig } from "./structures/IAgentConfig";
import { IAgentController } from "./structures/IAgentController";
import { IAgentConversateOptions } from "./structures/IAgentConversateOptions";
import { IAgentMessageContent } from "./structures/IAgentMessageContent";
import { IAgentTokenUsage } from "./structures/IAgentTokenUsage";

/**
 * Agent의 계약(contract) — {@link TypiaAgent}가 구현하는 형태.
 *
 * 중요한 메서드는 하나, {@link conversate}다. 나머지는 읽기 측 accessor(history, usage,
 * controllers, config, adapter), 부차 이벤트 채널({@link on}/{@link off}), 그리고
 * {@link clone}이다. 계약을 인터페이스로 두면 selector 없는 "micro" agent와 selector 구동 "full"
 * agent가 둘 다 이를 만족할 수 있고, 테스트/모킹이 구체 클래스를 대신할 수 있다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgent {
  /**
   * 사용자 메시지를 보내고 agent의 응답을 `for await`용으로 streaming한다.
   *
   * {@link IAgentExecution}을 반환한다 — 그 자체가 {@link IAgentResponse} part의
   * async-iterable이다. 외부 `Promise`는 턴이 _시작_되면(첫 요청 발신) resolve되므로 곧바로 순회할 수
   * 있다:
   *
   * ```ts
   * const execution = await agent.conversate("Yaho~");
   * for await (const r of execution) { ... }
   * ```
   *
   * @param content 일반 텍스트, 또는 멀티모달 content(text/image/file/audio).
   * @param options 턴 단위 옵션(abort signal).
   */
  conversate(
    content: string | IAgentMessageContent | IAgentMessageContent[],
    options?: IAgentConversateOptions,
  ): Promise<IAgentExecution>;

  /** 지금까지의 대화(live history). */
  getHistories(): IAgentHistory[];

  /** 대화 전체의 누적 토큰 usage. */
  getTokenUsage(): IAgentTokenUsage;

  /** 등록된 함수 controller들. */
  getControllers(): IAgentController[];

  /** 적용된 설정(기본값 병합). */
  getConfig(): IAgentConfig | undefined;

  /** 사용 중인 LLM adapter. */
  getAdapter(): IAgentAdapter;

  /** Telemetry {@link IAgentEvent}(부차 채널)를 구독한다. 체이닝을 위해 `this` 반환. */
  on<Type extends keyof IAgentEventMapper>(
    type: Type,
    listener: (event: IAgentEventMapper[Type]) => void | Promise<void>,
  ): this;

  /** 이전에 등록한 listener를 해제한다. */
  off<Type extends keyof IAgentEventMapper>(
    type: Type,
    listener: (event: IAgentEventMapper[Type]) => void | Promise<void>,
  ): this;

  /** 같은 config/controllers와 history 스냅샷을 가진 깊은 복제본. */
  clone(): IAgent;
}
