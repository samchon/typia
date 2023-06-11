import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createValidate_NativeSimple = _test_validate(
    "NativeSimple",
    NativeSimple.generate,
    typia.createValidate<NativeSimple>(),
    NativeSimple.SPOILERS,
);
