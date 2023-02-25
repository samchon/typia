import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectGeneric = _test_assertEquals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assertEquals(input),
);
