import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_clone_ObjectPropertyNullable = _test_misc_clone(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
  typia.misc.clone<ObjectPropertyNullable>(input),
);
