import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_validateEquals_ObjectUnionImplicit = _test_validateEquals(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.validateEquals<ObjectUnionImplicit>(input),
);
