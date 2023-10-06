import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_random_DynamicArray = _test_random("DynamicArray")<DynamicArray>(
    DynamicArray
)({
    random: () => typia.random<DynamicArray>(),
    assert: typia.createAssert<DynamicArray>(),
});
