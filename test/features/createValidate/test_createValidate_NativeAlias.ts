import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_validate_NativeAlias = _test_validate(
    "NativeAlias",
    NativeAlias.generate,
    typia.createValidate<NativeAlias>(),
    NativeAlias.SPOILERS,
);
