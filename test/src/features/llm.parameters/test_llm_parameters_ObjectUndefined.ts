import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_llm_parameters_ObjectUndefined = (): void =>
  _test_llm_parameters("ObjectUndefined")(
    typia.llm.parameters<ObjectUndefinedParameters>(),
  );

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}
