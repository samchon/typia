import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createIs_DynamicEnumeration = (): void =>
  _test_is("DynamicEnumeration")<DynamicEnumeration>(DynamicEnumeration)(
    typia.createIs<DynamicEnumeration>(),
  );
