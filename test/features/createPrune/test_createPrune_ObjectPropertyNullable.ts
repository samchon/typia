import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createPrune_ObjectPropertyNullable = _test_prune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createPrune<ObjectPropertyNullable>(),
);
