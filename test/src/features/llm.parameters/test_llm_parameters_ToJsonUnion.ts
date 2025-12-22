import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_llm_parameters_ToJsonUnion = (): void =>
  _test_llm_parameters("ToJsonUnion")(
    typia.llm.parameters<ToJsonUnionParameters>(),
  );

interface ToJsonUnionParameters {
  regular: ToJsonUnion;
  nullable: ToJsonUnion | null;
  optional: ToJsonUnion | undefined;
  faint: ToJsonUnion | null | undefined;
  array: Array<ToJsonUnion>;
}
