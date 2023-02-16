import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectNullable = _test_validatePrune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.validatePrune(input),
    ObjectNullable.SPOILERS,
);
