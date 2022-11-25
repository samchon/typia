import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_native_alias = _test_validate(
    "aliased native",
    NativeAlias.generate,
    (input) => TSON.validate(input),
    NativeAlias.SPOILERS,
);
