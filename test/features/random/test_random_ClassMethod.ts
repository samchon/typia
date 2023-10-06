import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_random_ClassMethod = _test_random("ClassMethod")<ClassMethod>(
    ClassMethod
)({
    random: () => typia.random<ClassMethod>(),
    assert: typia.createAssert<ClassMethod>(),
});
