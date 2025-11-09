import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createIsClone_DynamicUnion = (): void =>
  _test_misc_isClone("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    typia.misc.createIsClone<DynamicUnion>(),
  );
