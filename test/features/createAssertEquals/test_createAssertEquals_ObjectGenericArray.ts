import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectGenericArray = _test_assertEquals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertEquals<ObjectGenericArray>(),
);
