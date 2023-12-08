import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_is_TypeTagType = _test_is("TypeTagType")<TypeTagType>(
  TypeTagType,
)((input) => typia.is<TypeTagType>(input));
