import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_prune_ObjectPropertyNullable = _test_misc_prune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.misc.createPrune<ObjectPropertyNullable>(),
);
