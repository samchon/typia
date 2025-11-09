import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createEquals_DynamicUnion = (): void =>
  _test_equals("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    typia.createEquals<DynamicUnion>(),
  );
