import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectPropertyNullable = _test_prune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createPrune<ObjectPropertyNullable>(),
);
