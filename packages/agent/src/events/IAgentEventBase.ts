/**
 * 모든 {@link IAgentEvent} 변형이 공유하는 공통 헤드.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Type 판별자 리터럴.
 */
export interface IAgentEventBase<Type extends string> {
  /** 판별자(discriminator). */
  type: Type;

  /** 고유 id. */
  id: string;

  /** ISO-8601 생성 시각. */
  created_at: string;
}
