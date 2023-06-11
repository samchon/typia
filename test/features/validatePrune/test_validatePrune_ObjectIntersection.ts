import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_validatePrune_ObjectIntersection = _test_validatePrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.validatePrune(input),
    ObjectIntersection.SPOILERS,
);
