import { IAgentClassController } from "./IAgentClassController";
import { IAgentHttpController } from "./IAgentHttpController";
import { IAgentMcpController } from "./IAgentMcpController";

/**
 * Agent에 등록하는 함수 제공자 — {@link IAgentProps.controllers}에 넘기는 단위.
 *
 * Agentica가 검증한 `protocol` 판별 설계를 그대로 가져왔다. controller는 이름과
 * {@link ILlmApplication}/{@link IHttpLlmApplication}(즉 function 스키마)과 그것을 _실행_할
 * 수단을 묶는다. harness는 매 턴 전에 모든 controller의 함수를 {@link IAgentOperation}으로 평탄화하고 충돌
 * 이름을 중복 제거한다.
 *
 * - `class` — TypeScript class 메서드(`typia.llm.controller<T>()`); 인스턴스에서 실행.
 * - `http` — OpenAPI 문서로부터 만든 REST 백엔드 전체(`HttpLlm.application`); HTTP로 실행.
 * - `mcp` — Model Context Protocol 서버; client로 실행.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IAgentController =
  | IAgentClassController
  | IAgentHttpController
  | IAgentMcpController;
