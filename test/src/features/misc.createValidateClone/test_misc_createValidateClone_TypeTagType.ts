import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createValidateClone_TypeTagType =
  _test_misc_validateClone("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.misc.createValidateClone<TypeTagType>(),
  );
