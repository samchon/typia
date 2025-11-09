import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ToJsonUnion = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ToJsonUnion",
  })(
    typia.llm.parameters<ToJsonUnionParameters, "claude">(),
  );

interface ToJsonUnionParameters {
  regular: ToJsonUnion;
  nullable: ToJsonUnion | null;
  optional: ToJsonUnion | undefined;
  faint: ToJsonUnion | null | undefined;
  array: Array<ToJsonUnion>;
}