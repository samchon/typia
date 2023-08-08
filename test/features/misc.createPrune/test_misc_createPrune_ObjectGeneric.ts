import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_prune_ObjectGeneric = _test_misc_prune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.misc.createPrune<ObjectGeneric>(),
);
