import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_random_ClassGetter = _test_random("ClassGetter")<ClassGetter>(
    ClassGetter
)({
    random: () => typia.random<ClassGetter>(),
    assert: typia.createAssert<ClassGetter>(),
});
