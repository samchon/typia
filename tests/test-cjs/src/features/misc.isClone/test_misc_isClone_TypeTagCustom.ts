import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_isClone_TypeTagCustom = (): void =>
  _test_misc_isClone("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
    typia.misc.isClone<TypeTagCustom>(input),
  );
