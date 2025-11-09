import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ToJsonUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ToJsonUnion",
  })(
    typia.llm.parameters<ToJsonUnionParameters, "3.0">(),
  );

interface ToJsonUnionParameters {
  regular: ToJsonUnion;
  nullable: ToJsonUnion | null;
  optional: ToJsonUnion | undefined;
  faint: ToJsonUnion | null | undefined;
  array: Array<ToJsonUnion>;
}