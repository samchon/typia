import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_llm_parameters_ObjectDescription = (): void =>
  _test_llm_parameters("ObjectDescription")(
    typia.llm.parameters<ObjectDescriptionParameters>(),
  );

interface ObjectDescriptionParameters {
  regular: ObjectDescription;
  nullable: ObjectDescription | null;
  optional: ObjectDescription | undefined;
  faint: ObjectDescription | null | undefined;
  array: Array<ObjectDescription>;
}
