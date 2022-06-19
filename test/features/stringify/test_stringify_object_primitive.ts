import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_primitive = _test_stringify(
    "primitive object",
    ObjectPrimitive.generate(),
    (input) => TSON.stringify(input),
);
