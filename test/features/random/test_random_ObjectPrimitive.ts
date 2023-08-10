import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_random_ObjectPrimitive = _test_random<ObjectPrimitive>(
    ObjectPrimitive,
)({
    random: () => typia.random<ObjectPrimitive>(),
    assert: typia.createAssert<ObjectPrimitive>(),
});
