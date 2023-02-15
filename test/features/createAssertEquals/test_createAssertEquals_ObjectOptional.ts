import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectOptional = _test_assertEquals(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssertEquals<ObjectOptional>(),
);
