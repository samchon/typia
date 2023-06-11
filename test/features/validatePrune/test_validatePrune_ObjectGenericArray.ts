import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ObjectGenericArray = _test_validatePrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.validatePrune(input),
    ObjectGenericArray.SPOILERS,
);
