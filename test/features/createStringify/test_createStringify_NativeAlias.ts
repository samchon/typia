import typia from "typia";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_NativeAlias = _test_stringify(
    "NativeAlias",
    NativeAlias.generate,
    typia.createStringify<NativeAlias>(),
);
