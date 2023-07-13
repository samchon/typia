import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_validateStringify_TagPattern =
    _test_json_validateStringify(
        "TagPattern",
        TagPattern.generate,
        (input) => typia.json.validateStringify(input),
        TagPattern.SPOILERS,
    );
