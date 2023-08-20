import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_validateStringify_NativeAlias = _test_validateStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.validateStringify<NativeAlias>(input),
    NativeAlias.SPOILERS,
);
