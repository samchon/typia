import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_is_ArrayAny = _test_is("ArrayAny")<ArrayAny>(ArrayAny)(
  (input) => typia.is<ArrayAny>(input),
);
