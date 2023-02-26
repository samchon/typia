import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_validatePrune_ObjectGenericArray = _test_validatePrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.validatePrune(input),
    ObjectGenericArray.SPOILERS,
);
