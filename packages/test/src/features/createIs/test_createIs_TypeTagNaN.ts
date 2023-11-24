import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createIs_TypeTagNaN = _test_is("TypeTagNaN")<TypeTagNaN>(
  TypeTagNaN,
)(typia.createIs<TypeTagNaN>());
