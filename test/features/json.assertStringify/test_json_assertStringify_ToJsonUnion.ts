import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_assertStringify_ToJsonUnion = _test_json_assertStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.json.assertStringify(input),
);
