import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectAlias = _test_validatePrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validatePrune(input),
    ObjectAlias.SPOILERS,
);
