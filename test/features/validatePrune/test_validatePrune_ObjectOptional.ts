import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ObjectOptional = _test_validatePrune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validatePrune(input),
    ObjectOptional.SPOILERS,
);
