import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectUndefined = _test_assertParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertParse<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
