import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_random_TypeTagDefault = _test_random(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
    random: () => typia.random<TypeTagDefault>(),
    assert: typia.createAssert<TypeTagDefault>(),
});
