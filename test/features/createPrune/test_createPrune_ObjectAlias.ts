import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createPrune_ObjectAlias = _test_prune(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createPrune<ObjectAlias>(),
);
