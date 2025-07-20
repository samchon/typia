import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createValidate_TypeTagDefault = (): void =>
  _test_validate("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.createValidate<TypeTagDefault>(),
  );
