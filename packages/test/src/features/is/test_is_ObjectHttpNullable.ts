import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_is_ObjectHttpNullable = _test_is(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.is<ObjectHttpNullable>(input),
);
