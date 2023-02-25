import typia from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_NativeAlias = _test_validateClone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.validateClone(input),
    NativeAlias.SPOILERS,
);
