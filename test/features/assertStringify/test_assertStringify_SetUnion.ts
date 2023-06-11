import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_assertStringify_SetUnion = _test_assertStringify(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.assertStringify(input),
    SetUnion.SPOILERS,
);
