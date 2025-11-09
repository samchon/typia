import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_standardSchema_createValidate_TypeTagArray = (): void =>
  _test_standardSchema_validate("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.createValidate<TypeTagArray>(),
  );
