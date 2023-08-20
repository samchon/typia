import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_isStringify_SetAlias = _test_isStringify(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.isStringify<SetAlias>(input),
    SetAlias.SPOILERS,
);
