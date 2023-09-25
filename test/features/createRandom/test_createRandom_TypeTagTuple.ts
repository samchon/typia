import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createRandom_TypeTagTuple = _test_random(
    "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)({
    random: typia.createRandom<TypeTagTuple>(),
    assert: typia.createAssert<TypeTagTuple>(),
});
