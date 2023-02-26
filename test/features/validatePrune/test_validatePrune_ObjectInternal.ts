import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectInternal = _test_validatePrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.validatePrune(input),
    ObjectInternal.SPOILERS,
);
