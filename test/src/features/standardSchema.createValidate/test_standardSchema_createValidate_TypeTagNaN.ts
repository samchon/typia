import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_standardSchema_createValidate_TypeTagNaN =
  _test_standardSchema_validate("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
    typia.createValidate<TypeTagNaN>(),
  );
