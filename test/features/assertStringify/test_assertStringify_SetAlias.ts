import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_assertStringify_SetAlias = _test_assertStringify(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.assertStringify<SetAlias>(input),
    SetAlias.SPOILERS,
);
