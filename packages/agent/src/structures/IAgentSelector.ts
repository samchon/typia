import { IAgentOperation } from "./IAgentOperation";
import { IAgentSelectorProps } from "./IAgentSelectorProps";

/**
 * 함수가 _아주 많을 때_ 턴 전에 함수 집합을 좁히는 전략 — "함수가 매우 많으면?"에 대한 답.
 *
 * 기본(micro) agent는 selector가 **없다**. 매 턴 모든 operation을 모델에 나열하며, 이는 agentica의
 * `MicroAgentica`와 동일하고 함수 수십 개까지는 이상적이다. {@link IAgentConfig.capacity}를 넘으면
 * `IAgentSelector`가 개입해, 모델이 실제로 보는 operation을 세 가지 조합 가능한 전략으로 사전 선별한다:
 *
 * 1. **Semantic pre-filter**({@link prefilter}) — 함수 description을 embedding하여 사용자
 *    메시지와 유사한 것만 남긴다. LLM 호출 _이전_, 가장 저렴하고 순수 기계적.
 * 2. **Capacity divide-and-conquer** — 생존자를 capacity 크기 그룹으로 쪼개 그룹별로 모델이 후보를 병렬
 *    선택(agentica 방식), union에 대한 elitism 재선택은 선택.
 * 3. **Incremental-validation selection** — 선택 자체를 streamed structured output으로
 *    돌린다. 모델이 선택 함수명을 streaming하고 enum/`MinItems` 스키마에 대해 incremental하게
 *    validate한다. harness가 제 밥그릇을 먹는 셈.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentSelector {
  /**
   * 선택적, 비-LLM semantic pre-filter.
   *
   * 대화와 전체 operation 집합을 받아 (동기/비동기로) 축소된 후보 집합을 돌려준다 (예: embedding 유사도).
   * {@link select} 이전에 돈다.
   */
  prefilter?:
    | ((
        props: IAgentSelectorProps,
      ) => Promise<IAgentOperation[]> | IAgentOperation[])
    | undefined;

  /**
   * 이번 턴에 모델에 제공할 operation을 고른다.
   *
   * @returns 후보 operation들(`props.operations`의 부분집합).
   */
  select(props: IAgentSelectorProps): Promise<IAgentOperation[]>;
}
