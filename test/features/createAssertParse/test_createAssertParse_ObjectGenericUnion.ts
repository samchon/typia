import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectGenericUnion = _test_assertParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createAssertParse<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
