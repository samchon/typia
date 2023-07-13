import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_prune_ObjectUnionDouble = _test_misc_prune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.misc.createPrune<ObjectUnionDouble>(),
);
