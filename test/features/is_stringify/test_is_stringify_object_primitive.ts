import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_primitive = _test_is_stringify(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.isStringify(input),
    ObjectPrimitive.SPOILERS,
);
