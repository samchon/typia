import typia from "typia";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_NativeAlias = _test_validateStringify(
    "NativeAlias",
    NativeAlias.generate,
    typia.createValidateStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);
