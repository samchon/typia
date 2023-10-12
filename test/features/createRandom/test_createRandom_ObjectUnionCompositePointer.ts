import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createRandom_ObjectUnionCompositePointer = _test_random(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    random: typia.createRandom<ObjectUnionCompositePointer>(
        (ObjectUnionCompositePointer as any).RANDOM,
    ),
    assert: typia.createAssert<ObjectUnionCompositePointer>(),
});
