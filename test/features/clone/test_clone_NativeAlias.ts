import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_clone_NativeAlias = _test_clone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.clone(input),
);
