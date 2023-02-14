import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectOptional = _test_validatePrune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createValidatePrune<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);