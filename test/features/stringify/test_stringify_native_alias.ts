import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_native_alias = _test_stringify(
    "aliased native",
    NativeAlias.generate,
    (input) => TSON.stringify(input),
);
