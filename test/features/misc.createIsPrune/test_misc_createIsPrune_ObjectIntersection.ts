import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_isPrune_ObjectIntersection = _test_misc_isPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.misc.createIsPrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
