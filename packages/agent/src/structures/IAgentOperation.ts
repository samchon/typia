import { IAgentClassOperation } from "./IAgentClassOperation";
import { IAgentHttpOperation } from "./IAgentHttpOperation";
import { IAgentMcpOperation } from "./IAgentMcpOperation";
import { IAgentOutputOperation } from "./IAgentOutputOperation";

/**
 * {@link IAgentController}에서 평탄화된 하나의 호출 가능한 함수.
 *
 * Controller가 함수의 _그룹_이라면, operation은 그것을 실행하는 데 필요한 맥락과 짝지어진 _하나_의 함수다.
 * harness는 생성 시 모든 controller를 평탄화하고 충돌 이름을 중복 제거하여 전체 `IAgentOperation[]`을
 * 구성한다(agentica의 `AgenticaOperationComposer`와 동일). selector가 좁히는 대상이자
 * {@link IAgentTool} part가 바인딩되는 대상이다.
 *
 * `protocol`로 판별된다. 추가된 `"output"` 프로토콜은 executor가 **없는** 순수 structured-output
 * 대상으로, structured-output 스토리가 별도의 최상위 response 멤버를 추가하지 않고도 {@link IAgentTool}
 * 기계를 공유하게 한다.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentOperation =
  | IAgentClassOperation
  | IAgentHttpOperation
  | IAgentMcpOperation
  | IAgentOutputOperation;
