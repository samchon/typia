import { IValidation } from "@typia/interface";

import { IAgentOperation } from "../structures/IAgentOperation";
import { IAgentEventBase } from "./IAgentEventBase";

/**
 * Streamed prefix 또는 최종 값에 대한 validation 시도.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentValidateEvent extends IAgentEventBase<"validate"> {
  operation: IAgentOperation | null;
  result: IValidation<unknown>;
  /** Incremental(prefix) validation인지 final validation인지. */
  incremental: boolean;
}
