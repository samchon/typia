import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_isParameters_ObjectJsonTag = (): void => _test_functional_isParameters(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.isParameters(p),
)