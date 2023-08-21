import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_random_ObjectUnionExplicit = _test_random(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)({
    random: () => typia.random<ObjectUnionExplicit>(),
    assert: typia.createAssert<ObjectUnionExplicit>(),
});
