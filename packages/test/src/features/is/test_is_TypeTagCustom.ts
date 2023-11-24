import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_is_TypeTagCustom = _test_is("TypeTagCustom")<TypeTagCustom>(
  TypeTagCustom,
)((input) => typia.is<TypeTagCustom>(input));
