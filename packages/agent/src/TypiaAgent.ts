import { IAgent } from "./IAgent";
import { IAgentEventMapper } from "./events/IAgentEventMapper";
import { IAgentHistory } from "./histories/IAgentHistory";
import { IAgentExecution } from "./responses/IAgentExecution";
import { IAgentAdapter } from "./structures/IAgentAdapter";
import { IAgentConfig } from "./structures/IAgentConfig";
import { IAgentController } from "./structures/IAgentController";
import { IAgentConversateOptions } from "./structures/IAgentConversateOptions";
import { IAgentMessageContent } from "./structures/IAgentMessageContent";
import { IAgentProps } from "./structures/IAgentProps";
import { IAgentTokenUsage } from "./structures/IAgentTokenUsage";

/**
 * Typia harness 위에 구축된, streaming function-calling agent — `@typia/agent`의
 * `MicroAgentica` 등가물이자 mandate의 use-case가 인스턴스화하는 클래스:
 *
 * ```ts
 * const agent = new TypiaAgent({ adapter, controllers });
 * const response = await agent.conversate("Yaho~");
 * for await (const r of response) {
 *   if (r.type === "tool") {
 *     if ((await r.success()) === false) await r.feedback();
 *     else await r.execute();
 *   } else if (r.type === "text") {
 *     for await (const piece of r.stream()) console.log("piece", piece);
 *   }
 * }
 * ```
 *
 * 기본적으로 selector가 **없다**(매 턴 모든 함수 나열, `MicroAgentica`처럼).
 * {@link IAgentConfig.capacity} + selector를 두면 함수가 많아도 확장된다. provider의 native
 * `tools` feature를 쓰지 **않는다**. structured _텍스트_를 streaming하고, lenient parsing으로
 * 복구하며, incremental하게 validate하고, locked checkpoint로부터 output-token 천장을 넘어 이어
 * 붙인다.
 *
 * > 여기서는 인터페이스 전용 `declare class`(런타임 본문 없음)로 선언된다 — 이번 작업은 타입 표면을 출하하고, 구현은 별도로
 * > 따라온다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class TypiaAgent implements IAgent {
  /** @param props 생성 속성 — {@link IAgentProps.adapter}만 필수. */
  public constructor(props: IAgentProps);

  /** @inheritdoc */
  public conversate(
    content: string | IAgentMessageContent | IAgentMessageContent[],
    options?: IAgentConversateOptions,
  ): Promise<IAgentExecution>;

  /** @inheritdoc */
  public getHistories(): IAgentHistory[];

  /** @inheritdoc */
  public getTokenUsage(): IAgentTokenUsage;

  /** @inheritdoc */
  public getControllers(): IAgentController[];

  /** @inheritdoc */
  public getConfig(): IAgentConfig | undefined;

  /** @inheritdoc */
  public getAdapter(): IAgentAdapter;

  /** @inheritdoc */
  public on<Type extends keyof IAgentEventMapper>(
    type: Type,
    listener: (event: IAgentEventMapper[Type]) => void | Promise<void>,
  ): this;

  /** @inheritdoc */
  public off<Type extends keyof IAgentEventMapper>(
    type: Type,
    listener: (event: IAgentEventMapper[Type]) => void | Promise<void>,
  ): this;

  /** @inheritdoc */
  public clone(): TypiaAgent;
}
