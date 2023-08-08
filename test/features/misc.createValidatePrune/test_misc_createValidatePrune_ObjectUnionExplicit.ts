import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_validatePrune_ObjectUnionExplicit =
    _test_misc_validatePrune(
        "ObjectUnionExplicit",
        ObjectUnionExplicit.generate,
        typia.misc.createValidatePrune<ObjectUnionExplicit>(),
        ObjectUnionExplicit.SPOILERS,
    );
