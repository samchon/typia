import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_native_alias = _test_equals(
    "aliased native",
    NativeAlias.generate,
    (input) => TSON.equals(input),
);
