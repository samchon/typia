import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_random_TypeTagObjectUnion = _test_random(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)({
    random: typia.createRandom<TypeTagObjectUnion>(),
    assert: typia.createAssert<TypeTagObjectUnion>(),
});
