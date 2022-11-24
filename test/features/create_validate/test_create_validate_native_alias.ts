import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_native_alias = _test_validate(
    "aliased native",
    NativeAlias.generate,
    TSON.createValidate<NativeAlias>(),
    NativeAlias.SPOILERS(),
);
