import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_is_DynamicUnion = (): void =>
  _test_is("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
    typia.is<DynamicUnion>(input),
  );
