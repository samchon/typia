import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_llm_parameters_ObjectSimple = (): void =>
  _test_llm_parameters("ObjectSimple")(
    typia.llm.parameters<ObjectSimpleParameters>(),
  );

interface ObjectSimpleParameters {
  regular: ObjectSimple;
  nullable: ObjectSimple | null;
  optional: ObjectSimple | undefined;
  faint: ObjectSimple | null | undefined;
  array: Array<ObjectSimple>;
}
