import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_isParameters_ObjectUnionComposite = _test_functional_isParameters(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.isParameters(p),
)