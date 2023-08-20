import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_stringify_ObjectPrimitive = _test_stringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.stringify<ObjectPrimitive>(input),
);
