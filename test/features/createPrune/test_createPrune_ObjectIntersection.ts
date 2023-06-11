import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createPrune_ObjectIntersection = _test_prune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createPrune<ObjectIntersection>(),
);
