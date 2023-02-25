import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectUndefined = _test_assertParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertParse<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
