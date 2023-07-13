import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagStep } from "../../structures/TagStep";

export const test_json_assertStringify_TagStep = _test_json_assertStringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.json.assertStringify(input),
    TagStep.SPOILERS,
);
