import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_validateParse_ObjectHierarchical =
    _test_json_validateParse<ObjectHierarchical>(ObjectHierarchical)(
        typia.json.createValidateParse<ObjectHierarchical>(),
    );
