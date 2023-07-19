import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_validateParse_ArrayUnion =
    _test_json_validateParse<ArrayUnion>(ArrayUnion)(
        typia.json.createValidateParse<ArrayUnion>(),
    );
