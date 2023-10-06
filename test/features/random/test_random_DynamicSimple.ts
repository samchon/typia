import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_random_DynamicSimple = _test_random("DynamicSimple")<DynamicSimple>(
    DynamicSimple
)({
    random: () => typia.random<DynamicSimple>(),
    assert: typia.createAssert<DynamicSimple>(),
});
