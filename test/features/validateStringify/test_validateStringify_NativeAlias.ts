import typia from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_NativeAlias = _test_validateStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.validateStringify(input),
    NativeAlias.SPOILERS,
);
