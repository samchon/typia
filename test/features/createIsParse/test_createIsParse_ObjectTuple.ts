import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_ObjectTuple = _test_isParse(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createIsParse<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
