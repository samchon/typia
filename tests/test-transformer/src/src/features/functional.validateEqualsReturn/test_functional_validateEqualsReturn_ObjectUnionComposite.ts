import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateEqualsReturn_ObjectUnionComposite = (): void => _test_functional_validateEqualsReturn(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.validateEqualsReturn(p),
)