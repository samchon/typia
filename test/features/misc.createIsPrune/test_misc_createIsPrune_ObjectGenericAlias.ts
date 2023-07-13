import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_isPrune_ObjectGenericAlias = _test_misc_isPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.misc.createIsPrune<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
