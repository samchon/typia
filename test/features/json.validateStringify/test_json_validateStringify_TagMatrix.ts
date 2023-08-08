import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_validateStringify_TagMatrix =
    _test_json_validateStringify(
        "TagMatrix",
        TagMatrix.generate,
        (input) => typia.json.validateStringify(input),
        TagMatrix.SPOILERS,
    );
