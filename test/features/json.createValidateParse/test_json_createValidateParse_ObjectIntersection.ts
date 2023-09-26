import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createValidateParse_ObjectIntersection =
    _test_json_validateParse("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )(typia.json.createValidateParse<ObjectIntersection>());
