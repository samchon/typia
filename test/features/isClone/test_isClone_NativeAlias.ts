import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_isClone_NativeAlias = _test_isClone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.isClone(input),
    NativeAlias.SPOILERS,
);
