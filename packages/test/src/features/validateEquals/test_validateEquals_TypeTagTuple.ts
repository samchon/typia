import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_validateEquals_TypeTagTuple = _test_validateEquals(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.validateEquals<TypeTagTuple>(input),
);
