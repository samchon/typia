import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_is_ObjectDescription = _test_is(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.is<ObjectDescription>(input),
);
