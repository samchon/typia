import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_validateStringify_ArrayRepeatedUnion =
    _test_json_validateStringify<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
        (input) => typia.json.validateStringify(input),
    );
