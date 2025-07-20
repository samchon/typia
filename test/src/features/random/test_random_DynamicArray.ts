import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_random_DynamicArray = (): void =>
  _test_random("DynamicArray")<DynamicArray>(DynamicArray)({
    random: () => typia.random<DynamicArray>((DynamicArray as any).RANDOM),
    assert: typia.createAssert<DynamicArray>(),
  });
