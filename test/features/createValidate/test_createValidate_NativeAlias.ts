import typia from "../../../src";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_NativeAlias = _test_validate(
    "NativeAlias",
    NativeAlias.generate,
    typia.createValidate<NativeAlias>(),
    NativeAlias.SPOILERS,
);
