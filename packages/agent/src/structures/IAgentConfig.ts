import { IAgentCompaction } from "./IAgentCompaction";
import { IAgentContinuation } from "./IAgentContinuation";
import { IAgentSelector } from "./IAgentSelector";
import { IAgentSystemPrompt } from "./IAgentSystemPrompt";

/**
 * {@link IAgent} 튜닝. 모든 필드는 선택이며, 기본값은 `MicroAgentica` 스타일 agent를 재현한다(모든 함수 나열,
 * 텍스트 streaming, validate, retry).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentConfig {
  /** Agent가 답하는 BCP-47 locale(예: `"en-US"`, `"ko-KR"`). system prompt에 주입. */
  locale?: string | undefined;

  /** System prompt에 주입되는 IANA timezone(예: `"Asia/Seoul"`). */
  timezone?: string | undefined;

  /** Harness의 내장 system prompt 단계별 override. */
  systemPrompt?: Partial<IAgentSystemPrompt> | undefined;

  /**
   * Tool 호출당 최대 feedback-correction 시도 횟수.
   *
   * Parse/validation 실패 시 harness는 annotated 에러(`LlmJson.stringify`)와 함께 모델에
   * 재요청한다. `retry`번 실패하면 포기하고 그 실패를 part에 노출한다. 기본 `3`.
   */
  retry?: number | undefined;

  /**
   * {@link selector}가 개입하는 함수 수 임계값.
   *
   * 이하에서는 모든 함수를 모델에 나열(micro 모드). 초과하면 selection/divide-and- conquer가 집합을 좁힌다.
   * 기본: 무제한(micro 모드).
   */
  capacity?: number | undefined;

  /** 커스텀 대규모 함수 수 전략. 없으면 전부 나열(micro 모드). */
  selector?: IAgentSelector | undefined;

  /** Output-token 천장 정책 — 라이브러리의 핵심 동작. */
  continuation?: IAgentContinuation | undefined;

  /**
   * 소비자가 해소(`execute()`/`feedback()`)하지 않고 지나친 {@link IAgentTool} part 처리 정책.
   *
   * - `"skip"`(기본) — "미실행" 노트를 feedback하고 계속.
   * - `"execute"` — validated 인자로 자동 실행.
   * - `"throw"` — 프로그래밍 오류를 크게 드러내기 위해 raise.
   */
  onUnhandledTool?: "skip" | "execute" | "throw" | undefined;

  /**
   * 한 턴 내 독립 tool 호출의 동시 실행 허용 여부.
   *
   * 기본 `false`(직렬, 단순 `for await` 루프에 부합). `true`면 concurrency-safe operation을
   * 병렬 실행하되 part _emit_ 순서는 보존한다(Claude Code 방식).
   */
  parallel?: boolean | undefined;

  /**
   * Streaming prefix를 lenient-parse·validate하는 주기.
   *
   * 매 token마다 parse하면 O(n²)이라 harness는 debounce한다. token 수, ms 간격, 또는
   * `"boundary"`(구조 경계 — newline/닫는 괄호 — 에서 parse) 중 하나로 표현. 기본 `"boundary"`.
   */
  validateCadence?: number | "boundary" | undefined;

  /** 긴 호흡에서 history compaction을 위한 예약 hook. 없으면 전체 history 재생. */
  compaction?: IAgentCompaction | undefined;
}
