import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createEquals_DynamicEnumeration = (): void =>
  _test_equals("DynamicEnumeration")<DynamicEnumeration>(DynamicEnumeration)(
    typia.createEquals<DynamicEnumeration>(),
  );
