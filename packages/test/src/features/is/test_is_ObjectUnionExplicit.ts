import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_is_ObjectUnionExplicit = _test_is(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.is<ObjectUnionExplicit>(input),
);
