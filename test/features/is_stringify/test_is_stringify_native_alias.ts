import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_native_alias = _test_is_stringify(
    "aliased native",
    NativeAlias.generate,
    (input) => TSON.isStringify(input),
    NativeAlias.SPOILERS,
);
