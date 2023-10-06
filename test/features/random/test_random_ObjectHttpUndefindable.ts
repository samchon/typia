import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_random_ObjectHttpUndefindable = _test_random("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)({
    random: () => typia.random<ObjectHttpUndefindable>(),
    assert: typia.createAssert<ObjectHttpUndefindable>(),
});
