import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createIs_TypeTagTuple = _test_is(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.createIs<TypeTagTuple>());
