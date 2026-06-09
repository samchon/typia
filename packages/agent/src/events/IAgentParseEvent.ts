import { IJsonParseResult } from "@typia/interface";

import { IAgentOperation } from "../structures/IAgentOperation";
import { IAgentEventBase } from "./IAgentEventBase";

/**
 * Lenient-parse 복구(Tier-1 seam) — 성공 또는 partial.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAgentParseEvent extends IAgentEventBase<"parse"> {
  operation: IAgentOperation | null;
  result: IJsonParseResult<unknown>;
}
