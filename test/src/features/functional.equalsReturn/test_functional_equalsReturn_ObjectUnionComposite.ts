import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_equalsReturn_ObjectUnionComposite = (): void => _test_functional_equalsReturn(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.equalsReturn(p),
)