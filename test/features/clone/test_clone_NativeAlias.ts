import typia from "typia";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_NativeAlias = _test_clone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.clone(input),
);
