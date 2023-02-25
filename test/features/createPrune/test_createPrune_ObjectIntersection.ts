import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectIntersection = _test_prune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createPrune<ObjectIntersection>(),
);
