import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createValidateClone_TypeTagArray = (): void =>
  _test_misc_validateClone("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.misc.createValidateClone<TypeTagArray>(),
  );
