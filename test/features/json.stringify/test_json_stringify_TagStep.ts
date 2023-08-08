import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagStep } from "../../structures/TagStep";

export const test_json_stringify_TagStep = _test_json_stringify(
    "TagStep",
    TagStep.generate,
    (input) => typia.json.stringify(input),
);
