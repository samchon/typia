import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_validateParse_ArrayHierarchical =
    _test_json_validateParse<ArrayHierarchical>(ArrayHierarchical)(
        typia.json.createValidateParse<ArrayHierarchical>(),
    );
