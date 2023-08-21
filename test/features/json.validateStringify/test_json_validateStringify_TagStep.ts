import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagStep } from "../../structures/TagStep";

export const test_json_validateStringify_TagStep = _test_json_validateStringify(
    "TagStep",
)<TagStep>(TagStep)((input) => typia.json.validateStringify<TagStep>(input));
