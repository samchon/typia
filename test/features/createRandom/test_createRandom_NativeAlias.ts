import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createRandom_NativeAlias = _test_random("NativeAlias")<NativeAlias>(
    NativeAlias
)({
    random: typia.createRandom<NativeAlias>(),
    assert: typia.createAssert<NativeAlias>(),
});
