import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_random_TypeTagLength = _test_random(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
    random: () => typia.random<TypeTagLength>((TypeTagLength as any).RANDOM),
    assert: typia.createAssert<TypeTagLength>(),
});
