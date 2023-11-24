import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_assertClone_ObjectUnionExplicit = _test_misc_assertClone(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.misc.assertClone<ObjectUnionExplicit>(input),
);
