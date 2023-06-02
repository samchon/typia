import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_ObjectOptional = _test_assertPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assertPrune(input),
    ObjectOptional.SPOILERS,
);
