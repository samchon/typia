import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createValidateEquals_TypeTagMatrix = _test_validateEquals(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.createValidateEquals<TypeTagMatrix>());
