import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectSimple = _test_isParse(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createIsParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
