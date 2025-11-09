import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_standardSchema_createValidate_TypeTagCustom = (): void =>
  _test_standardSchema_validate("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    typia.createValidate<TypeTagCustom>(),
  );
