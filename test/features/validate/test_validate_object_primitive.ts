import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate } from "./_test_validate";

export const test_validate_object_primitive = _test_validate(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.validate(input),
    ObjectPrimitive.SPOILERS,
);
