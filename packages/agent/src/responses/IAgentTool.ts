import { IAgentOperation } from "../structures/IAgentOperation";
import { IAgentExecute } from "./IAgentExecute";
import { IAgentFeedbackProps } from "./IAgentFeedbackProps";
import { IAgentValidation } from "./IAgentValidation";

/**
 * Agent 턴의 함수 호출 part — {@link IAgentResponse}의 `r.type === "tool"` 분기이자 harness
 * 전체의 쇼케이스.
 *
 * Native `tool_calls`(불투명한 인자 덩어리 하나)와 달리, `IAgentTool`은 텍스트로 streaming되어 들어와
 * lenient parsing으로 복구된 structured payload 위에서 도는 _소비자 주도 state machine_이다.
 * {@link IAgentValidation}을 상속하므로 인자가 _incremental하게_ 관찰·검증되며, mandate의 루프가 필요로
 * 하는 세 행동 — 점검, 교정, 실행 — 을 더한다:
 *
 * ```ts
 * for await (const r of execution)
 *   if (r.type === "tool") {
 *     if ((await r.success()) === false)
 *       await r.feedback(); // 교정
 *     else await r.execute(); // 실행
 *   }
 * ```
 *
 * 실행은 **소비자에 의해 게이팅**된다. harness는 validated 호출을 노출하고, 호출자가 실행/교정/건너뜀을
 * 결정한다(permission / human-in-the-loop 점검의 자연스러운 자리). 이 part를 지나 iterator를 진행시키면
 * 턴이 재개되어 소비자가 한 일을 feedback하며, orchestrator의 후속 설명은 이후 {@link IAgentText} part로
 * 도착한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Arguments 함수의 parameter 타입(바인딩 전엔 `unknown`).
 * @template Result 함수의 반환 타입.
 */
export interface IAgentTool<
  Arguments = unknown,
  Result = unknown,
> extends IAgentValidation<Arguments> {
  /** 판별자(discriminator). */
  type: "tool";

  /** 턴 내 이 호출의 안정 id. */
  id: string;

  /** 모델이 호출하려는 함수(이름, schema, protocol, executor). */
  operation: IAgentOperation;

  /**
   * 도착하는 대로 raw 인자-텍스트 delta를 streaming한다 — {@link IAgentText.stream}의 대칭 동반자.
   * _파싱·검증된_ partial은 {@link IAgentValidation.watch}를 선호하라.
   */
  stream(): AsyncIterable<string>;

  /**
   * Correction feedback-loop를 돌리고 교정된 호출로 resolve한다.
   *
   * Validation 에러를 annotated JSON(`LlmJson.stringify`, harness의 Tier-2
   * feedback) 으로 렌더해 모델에 재요청하며 {@link IAgentConfig.retry}로 제한된다. 모델의 교정 인자를 담은
   * _새_ {@link IAgentTool}을 반환하여 조합 가능하다:
   *
   * ```ts
   * let tool = r;
   * while ((await tool.success()) === false) tool = await tool.feedback();
   * await tool.execute();
   * ```
   *
   * @param props Correction prompt에 포함할 추가 안내(선택).
   */
  feedback(
    props?: IAgentFeedbackProps<Arguments>,
  ): Promise<IAgentTool<Arguments, Result>>;

  /**
   * Validated 인자로 바인딩된 함수를 실행한다.
   *
   * {@link IAgentExecute} 실행 기록으로 resolve하며 모델의 후속을 위해 history에 기록한다. `"output"`
   * 프로토콜 operation(structured output, executor 없음)에서는 resolve된 `value`가
   * validated payload 자체다.
   *
   * 인자가 validate되기 전에 호출하면 throw한다. {@link success}로 가드하거나 먼저 {@link feedback}을
   * 쓰라.
   */
  execute(): Promise<IAgentExecute<Arguments, Result>>;
}
