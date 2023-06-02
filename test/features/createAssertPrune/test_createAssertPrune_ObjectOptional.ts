import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectOptional = _test_assertPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssertPrune<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
