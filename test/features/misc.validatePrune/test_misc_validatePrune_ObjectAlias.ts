import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_validatePrune_ObjectAlias = _test_misc_validatePrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.misc.validatePrune(input),
    ObjectAlias.SPOILERS,
);
