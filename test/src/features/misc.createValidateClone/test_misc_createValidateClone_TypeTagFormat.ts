import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createValidateClone_TypeTagFormat =
  _test_misc_validateClone("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
    typia.misc.createValidateClone<TypeTagFormat>(),
  );
