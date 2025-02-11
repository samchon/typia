import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_isParameters_ObjectHierarchical = _test_functional_isParameters(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => ObjectHierarchical) => typia.functional.isParameters(p),
)