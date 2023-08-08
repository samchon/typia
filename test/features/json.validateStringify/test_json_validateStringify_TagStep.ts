import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagStep } from "../../structures/TagStep";

export const test_json_validateStringify_TagStep = _test_json_validateStringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.json.validateStringify(input),
    TagStep.SPOILERS,
);
