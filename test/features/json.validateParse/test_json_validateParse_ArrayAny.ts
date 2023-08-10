import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_validateParse_ArrayAny =
    _test_json_validateParse<ArrayAny>(ArrayAny)((input) =>
        typia.json.validateParse<ArrayAny>(input),
    );
