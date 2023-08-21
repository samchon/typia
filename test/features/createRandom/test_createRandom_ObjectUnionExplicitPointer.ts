import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_random_ObjectUnionExplicitPointer = _test_random(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
    random: typia.createRandom<ObjectUnionExplicitPointer>(),
    assert: typia.createAssert<ObjectUnionExplicitPointer>(),
});
