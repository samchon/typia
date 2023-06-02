import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_ObjectPrimitive = _test_isStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isStringify(input),
    ObjectPrimitive.SPOILERS,
);
