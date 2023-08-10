import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_random_ArraySimplePointer = _test_random<ArraySimplePointer>(
    ArraySimplePointer,
)({
    random: typia.createRandom<ArraySimplePointer>(),
    assert: typia.createAssert<ArraySimplePointer>(),
});
