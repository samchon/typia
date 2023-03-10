import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_validatePrune_ObjectSimple = _test_validatePrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.validatePrune(input),
    ObjectSimple.SPOILERS,
);
