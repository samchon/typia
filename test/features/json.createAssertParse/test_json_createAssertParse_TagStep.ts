import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagStep } from "../../structures/TagStep";

export const test_json_assertParse_TagStep = _test_json_assertParse<TagStep>(
    TagStep,
)(typia.json.createAssertParse<TagStep>());
