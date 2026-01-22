import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_isClone_TypeTagFormat = (): void =>
  _test_misc_isClone("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
    typia.misc.isClone<TypeTagFormat>(input),
  );
