import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectPrimitive = _test_validateParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createValidateParse<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
