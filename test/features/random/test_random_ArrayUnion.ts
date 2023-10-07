import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_random_ArrayUnion = _test_random("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
)({
    random: () => typia.random<ArrayUnion>((ArrayUnion as any).RANDOM),
    assert: typia.createAssert<ArrayUnion>(),
});
