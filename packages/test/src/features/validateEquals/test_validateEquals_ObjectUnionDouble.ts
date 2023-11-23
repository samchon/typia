import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_validateEquals_ObjectUnionDouble = _test_validateEquals(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.validateEquals<ObjectUnionDouble>(input),
);
