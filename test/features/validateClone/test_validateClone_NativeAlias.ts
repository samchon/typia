import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_validateClone_NativeAlias = _test_validateClone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.validateClone<NativeAlias>(input),
    NativeAlias.SPOILERS,
);
