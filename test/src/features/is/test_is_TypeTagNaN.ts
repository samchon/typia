import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_is_TypeTagNaN = (): void =>
  _test_is("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)((input) =>
    typia.is<TypeTagNaN>(input),
  );
