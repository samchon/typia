import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectUndefined = _test_validatePrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validatePrune(input),
    ObjectUndefined.SPOILERS,
);
