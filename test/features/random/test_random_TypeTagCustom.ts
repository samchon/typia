import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_random_TypeTagCustom = _test_random(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
    random: () => typia.random<TypeTagCustom>((TypeTagCustom as any).RANDOM),
    assert: typia.createAssert<TypeTagCustom>(),
});
