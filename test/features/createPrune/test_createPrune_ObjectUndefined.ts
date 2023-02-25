import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectUndefined = _test_prune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createPrune<ObjectUndefined>(),
);
