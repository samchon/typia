import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_llm_parameters_ObjectUnionComposite = (): void =>
  _test_llm_parameters("ObjectUnionComposite")(
    typia.llm.parameters<ObjectUnionCompositeParameters>(),
  );

interface ObjectUnionCompositeParameters {
  regular: ObjectUnionComposite;
  nullable: ObjectUnionComposite | null;
  optional: ObjectUnionComposite | undefined;
  faint: ObjectUnionComposite | null | undefined;
  array: Array<ObjectUnionComposite>;
}
