import typia from "typia"
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ObjectIntersection = 
    _test_application("ajv")(
        "ObjectIntersection",
        typia.application<[ObjectIntersection], "ajv">(),
    );