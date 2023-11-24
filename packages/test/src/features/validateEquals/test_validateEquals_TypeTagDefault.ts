import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_validateEquals_TypeTagDefault = _test_validateEquals(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.validateEquals<TypeTagDefault>(input),
);
