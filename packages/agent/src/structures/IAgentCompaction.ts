/**
 * 긴 호흡의 대화에서 history를 compaction(summarize-and-truncate)하기 위한 예약 정책. 없으면 매 턴 전체
 * history를 재생한다(agentica 패리티).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentCompaction {
  /** 재생되는 history가 이 토큰 추정치를 넘으면 compaction을 trigger한다. */
  threshold?: number | undefined;

  /** 커스텀 summarizer. 없으면 기본 summarize-and-truncate. */
  summarize?: ((next: unknown) => Promise<unknown>) | undefined;
}
