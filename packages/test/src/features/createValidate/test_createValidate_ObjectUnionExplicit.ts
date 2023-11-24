import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidate_ObjectUnionExplicit = _test_validate(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)(
  typia.createValidate<ObjectUnionExplicit>(),
);
