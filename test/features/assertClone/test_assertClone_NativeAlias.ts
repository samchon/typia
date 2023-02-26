import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_assertClone_NativeAlias = _test_assertClone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.assertClone(input),
    NativeAlias.SPOILERS,
);
