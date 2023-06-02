import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createValidateClone_NativeAlias = _test_validateClone(
    "NativeAlias",
    NativeAlias.generate,
    typia.createValidateClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
