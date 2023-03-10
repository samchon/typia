import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createIsPrune_ObjectAlias = _test_isPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createIsPrune<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
