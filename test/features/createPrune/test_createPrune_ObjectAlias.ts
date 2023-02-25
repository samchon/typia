import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectAlias = _test_prune(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createPrune<ObjectAlias>(),
);
