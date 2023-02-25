import typia from "../../../src";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_NativeAlias = _test_isClone(
    "NativeAlias",
    NativeAlias.generate,
    typia.createIsClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
