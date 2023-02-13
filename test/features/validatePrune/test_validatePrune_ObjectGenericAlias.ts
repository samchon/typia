import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectGenericAlias = _test_validatePrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.validatePrune(input),
    ObjectGenericAlias.SPOILERS,
);