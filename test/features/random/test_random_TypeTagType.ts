import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_random_TypeTagType = _test_random("TypeTagType")<TypeTagType>(
    TypeTagType,
)({
    random: () => typia.random<TypeTagType>(),
    assert: typia.createAssert<TypeTagType>(),
});
