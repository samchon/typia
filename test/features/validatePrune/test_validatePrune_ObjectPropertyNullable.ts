import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validatePrune_ObjectPropertyNullable = _test_validatePrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.validatePrune(input),
    ObjectPropertyNullable.SPOILERS,
);
