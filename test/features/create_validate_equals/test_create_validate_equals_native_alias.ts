import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_native_alias = _test_validate_equals(
    "aliased native",
    NativeAlias.generate,
    TSON.createValidateEquals<NativeAlias>(),
    false,
);
