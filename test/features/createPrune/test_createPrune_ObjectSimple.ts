import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createPrune_ObjectSimple = _test_prune(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createPrune<ObjectSimple>(),
);
