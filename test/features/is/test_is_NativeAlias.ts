import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_is_NativeAlias = _test_is(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.is<NativeAlias>(input),
    NativeAlias.SPOILERS,
);
