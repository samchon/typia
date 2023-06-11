import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createPrune_ObjectPrimitive = _test_prune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createPrune<ObjectPrimitive>(),
);
