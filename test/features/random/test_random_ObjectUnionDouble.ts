import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_random_ObjectUnionDouble = _test_random<ObjectUnionDouble>(
    ObjectUnionDouble,
)({
    random: () => typia.random<ObjectUnionDouble>(),
    assert: typia.createAssert<ObjectUnionDouble>(),
});
