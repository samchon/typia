import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectPrimitive = _test_stringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createStringify<ObjectPrimitive>(),
);
