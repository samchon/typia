import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_ObjectTuple = _test_isPrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createIsPrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
