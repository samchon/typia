import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createValidate_TypeTagType = (): void =>
  _test_validate("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.createValidate<TypeTagType>(),
  );
