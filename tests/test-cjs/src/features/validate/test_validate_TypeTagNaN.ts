import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_validate_TypeTagNaN = (): void =>
  _test_validate("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)((input) =>
    typia.validate<TypeTagNaN>(input),
  );
