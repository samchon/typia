import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_assertStringify_SetUnion = _test_json_assertStringify(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.json.assertStringify(input),
    SetUnion.SPOILERS,
);
