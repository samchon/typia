import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createStringify_ObjectPrimitive = _test_stringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createStringify<ObjectPrimitive>(),
);
