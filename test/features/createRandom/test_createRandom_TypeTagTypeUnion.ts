import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createRandom_TypeTagTypeUnion = _test_random(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
    random: typia.createRandom<TypeTagTypeUnion>(),
    assert: typia.createAssert<TypeTagTypeUnion>(),
});
