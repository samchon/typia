import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createPrune_ObjectGenericArray = _test_prune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createPrune<ObjectGenericArray>(),
);
