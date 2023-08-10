import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_validateParse_ArraySimple =
    _test_json_validateParse<ArraySimple>(ArraySimple)((input) =>
        typia.json.validateParse<ArraySimple>(input),
    );
