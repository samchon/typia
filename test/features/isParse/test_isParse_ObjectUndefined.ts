import typia from "typia";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectUndefined = _test_isParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isParse<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
