import typia from "../../../src";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_NativeAlias = _test_validateClone(
    "NativeAlias",
    NativeAlias.generate,
    typia.createValidateClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
