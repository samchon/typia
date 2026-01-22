import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_clone_TypeTagType = (): void =>
  _test_misc_clone("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
    typia.misc.clone<TypeTagType>(input),
  );
