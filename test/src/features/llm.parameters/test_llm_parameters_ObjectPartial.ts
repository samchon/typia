import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_llm_parameters_ObjectPartial = (): void =>
  _test_llm_parameters("ObjectPartial")(
    typia.llm.parameters<ObjectPartialParameters>(),
  );

interface ObjectPartialParameters {
  regular: ObjectPartial;
  nullable: ObjectPartial | null;
  optional: ObjectPartial | undefined;
  faint: ObjectPartial | null | undefined;
  array: Array<ObjectPartial>;
}
