import typia from "../../../src";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_NativeAlias = _test_assertClone(
    "NativeAlias",
    NativeAlias.generate,
    typia.createAssertClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
