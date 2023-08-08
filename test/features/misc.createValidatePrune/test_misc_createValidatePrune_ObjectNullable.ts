import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_validatePrune_ObjectNullable = _test_misc_validatePrune(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.misc.createValidatePrune<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
