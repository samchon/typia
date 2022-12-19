import typia from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_NativeAlias = _test_validate(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.validate(input),
    NativeAlias.SPOILERS,
);