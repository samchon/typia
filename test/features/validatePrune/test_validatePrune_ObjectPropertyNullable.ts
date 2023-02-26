import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectPropertyNullable = _test_validatePrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.validatePrune(input),
    ObjectPropertyNullable.SPOILERS,
);
