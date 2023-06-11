import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createValidatePrune_ObjectTuple = _test_validatePrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createValidatePrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
