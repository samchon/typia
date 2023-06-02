import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createPrune_ObjectUndefined = _test_prune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createPrune<ObjectUndefined>(),
);
