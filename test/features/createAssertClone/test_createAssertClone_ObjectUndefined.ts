import typia from "typia";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUndefined = _test_assertClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
