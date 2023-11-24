import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_clone_ObjectNullable = _test_misc_clone(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  typia.misc.clone<ObjectNullable>(input),
);
