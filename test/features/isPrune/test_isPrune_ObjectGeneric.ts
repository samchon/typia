import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectGeneric = _test_isPrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.isPrune(input),
    ObjectGeneric.SPOILERS,
);
