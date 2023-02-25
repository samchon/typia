import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectGeneric = _test_isPrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIsPrune<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
