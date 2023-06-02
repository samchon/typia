import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createPrune_ObjectGenericAlias = _test_prune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createPrune<ObjectGenericAlias>(),
);
