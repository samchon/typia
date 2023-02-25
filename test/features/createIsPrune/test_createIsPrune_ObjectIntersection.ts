import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectIntersection = _test_isPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsPrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
