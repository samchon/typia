import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_validate_TypeTagPattern = (): void =>
  _test_validate("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.validate<TypeTagPattern>(input),
  );
