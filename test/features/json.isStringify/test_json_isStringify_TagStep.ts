import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagStep } from "../../structures/TagStep";

export const test_json_isStringify_TagStep = _test_json_isStringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.json.isStringify(input),
    TagStep.SPOILERS,
);
