import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectOptional = _test_isPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createIsPrune<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
