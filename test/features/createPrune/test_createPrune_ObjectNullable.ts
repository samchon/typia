import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createPrune_ObjectNullable = _test_prune(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createPrune<ObjectNullable>(),
);
