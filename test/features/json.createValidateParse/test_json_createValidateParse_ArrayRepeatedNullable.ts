import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_validateParse_ArrayRepeatedNullable =
    _test_json_validateParse<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
        typia.json.createValidateParse<ArrayRepeatedNullable>(),
    );
