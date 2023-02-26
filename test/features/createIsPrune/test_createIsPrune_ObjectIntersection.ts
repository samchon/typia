import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createIsPrune_ObjectIntersection = _test_isPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsPrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
