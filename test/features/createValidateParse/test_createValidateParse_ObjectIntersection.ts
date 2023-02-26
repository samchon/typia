import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createValidateParse_ObjectIntersection = _test_validateParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidateParse<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
