import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_validatePrune_ObjectOptional = _test_validatePrune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validatePrune<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
