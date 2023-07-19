import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_validateStringify_ArrayRepeatedRequired =
    _test_json_validateStringify<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
        (input) => typia.json.validateStringify(input),
    );
