import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createValidate_TypeTagTypeUnion = _test_validate(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)(typia.createValidate<TypeTagTypeUnion>());
