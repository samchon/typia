import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createValidatePrune_ObjectIntersection = _test_validatePrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidatePrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
