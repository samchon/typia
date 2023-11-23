import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createValidateEquals_TypeTagCustom = _test_validateEquals(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.createValidateEquals<TypeTagCustom>());
