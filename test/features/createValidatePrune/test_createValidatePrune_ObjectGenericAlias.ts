import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidatePrune_ObjectGenericAlias = _test_validatePrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidatePrune<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
