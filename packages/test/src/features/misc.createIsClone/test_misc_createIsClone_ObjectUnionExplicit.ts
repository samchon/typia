import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_createIsClone_ObjectUnionExplicit = _test_misc_isClone(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)(
  typia.misc.createIsClone<ObjectUnionExplicit>(),
);
