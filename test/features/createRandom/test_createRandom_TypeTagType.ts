import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createRandom_TypeTagType = _test_random("TypeTagType")<TypeTagType>(
    TypeTagType
)({
    random: typia.createRandom<TypeTagType>(),
    assert: typia.createAssert<TypeTagType>(),
});
