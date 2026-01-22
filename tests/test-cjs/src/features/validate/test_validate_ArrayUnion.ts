import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_validate_ArrayUnion = (): void =>
  _test_validate("ArrayUnion")<ArrayUnion>(ArrayUnion)((input) =>
    typia.validate<ArrayUnion>(input),
  );
