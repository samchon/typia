import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectPropertyNullable = _test_validatePrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createValidatePrune<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);