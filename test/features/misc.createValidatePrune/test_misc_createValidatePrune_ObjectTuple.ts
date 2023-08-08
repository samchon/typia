import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_validatePrune_ObjectTuple = _test_misc_validatePrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.misc.createValidatePrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
