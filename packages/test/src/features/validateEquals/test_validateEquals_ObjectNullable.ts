import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_validateEquals_ObjectNullable = _test_validateEquals(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  typia.validateEquals<ObjectNullable>(input),
);
