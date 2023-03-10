import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createIsPrune_ObjectGenericAlias = _test_isPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createIsPrune<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
