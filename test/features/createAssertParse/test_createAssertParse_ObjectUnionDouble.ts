import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectUnionDouble = _test_assertParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createAssertParse<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
