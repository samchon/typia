import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ObjectSimple = _test_validatePrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.validatePrune(input),
    ObjectSimple.SPOILERS,
);
