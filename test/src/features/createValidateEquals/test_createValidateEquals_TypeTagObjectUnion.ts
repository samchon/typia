import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createValidateEquals_TypeTagObjectUnion =
  _test_validateEquals("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.createValidateEquals<TypeTagObjectUnion>());
