import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_validatePrune_ObjectUndefined = _test_validatePrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validatePrune(input),
    ObjectUndefined.SPOILERS,
);
