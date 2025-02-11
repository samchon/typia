import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_isReturn_ObjectUnionComposite = _test_functional_isReturn(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.isReturn(p),
)