import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_validate_ArrayAny = (): void =>
  _test_validate("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
    typia.validate<ArrayAny>(input),
  );
