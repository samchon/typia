/**
 * 모든 {@link IAgentHistory} 및 {@link IAgentHistoryJson} 변형이 공유하는 공통 헤드.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Type 판별자 리터럴.
 */
export interface IAgentHistoryBase<Type extends string> {
  /** 판별자(discriminator). */
  type: Type;

  /** 고유 id. */
  id: string;

  /** ISO-8601 생성 시각. */
  created_at: string;
}
