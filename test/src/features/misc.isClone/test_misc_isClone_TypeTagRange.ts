import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_isClone_TypeTagRange = (): void =>
  _test_misc_isClone("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
    typia.misc.isClone<TypeTagRange>(input),
  );
