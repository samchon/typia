import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateFunction_ObjectUnionComposite = (): void => _test_functional_validateFunction(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.validateFunction(p),
)