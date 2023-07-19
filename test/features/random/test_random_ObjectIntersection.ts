import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_random_ObjectIntersection = _test_random<ObjectIntersection>(
    ObjectIntersection,
)({
    random: () => typia.random<ObjectIntersection>(),
    assert: typia.createAssert<ObjectIntersection>(),
});
