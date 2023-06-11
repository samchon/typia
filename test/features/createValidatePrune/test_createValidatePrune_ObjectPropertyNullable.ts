import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createValidatePrune_ObjectPropertyNullable =
    _test_validatePrune(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        typia.createValidatePrune<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
