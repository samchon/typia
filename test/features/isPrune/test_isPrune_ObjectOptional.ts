import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectOptional = _test_isPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.isPrune(input),
    ObjectOptional.SPOILERS,
);
