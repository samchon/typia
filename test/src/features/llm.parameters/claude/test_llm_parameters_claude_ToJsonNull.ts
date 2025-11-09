import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ToJsonNull = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ToJsonNull",
  })(
    typia.llm.parameters<ToJsonNullParameters, "claude">(),
  );

interface ToJsonNullParameters {
  regular: ToJsonNull;
  nullable: ToJsonNull | null;
  optional: ToJsonNull | undefined;
  faint: ToJsonNull | null | undefined;
  array: Array<ToJsonNull>;
}