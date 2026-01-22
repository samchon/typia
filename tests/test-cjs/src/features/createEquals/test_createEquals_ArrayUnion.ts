import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createEquals_ArrayUnion = (): void =>
  _test_equals("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.createEquals<ArrayUnion>(),
  );
