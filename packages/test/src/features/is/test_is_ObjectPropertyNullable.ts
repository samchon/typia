import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_is_ObjectPropertyNullable = _test_is(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
  typia.is<ObjectPropertyNullable>(input),
);
