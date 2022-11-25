import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_NativeAlias = _test_assertClone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => TSON.assertClone(input),
    NativeAlias.SPOILERS,
);
