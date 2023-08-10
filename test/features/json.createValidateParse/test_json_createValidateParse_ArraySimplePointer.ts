import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_json_validateParse_ArraySimplePointer =
    _test_json_validateParse<ArraySimplePointer>(ArraySimplePointer)(
        typia.json.createValidateParse<ArraySimplePointer>(),
    );
