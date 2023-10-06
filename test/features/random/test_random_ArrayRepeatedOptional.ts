import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_random_ArrayRepeatedOptional = _test_random("ArrayRepeatedOptional")<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)({
    random: () => typia.random<ArrayRepeatedOptional>(),
    assert: typia.createAssert<ArrayRepeatedOptional>(),
});
