import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectPrimitive = _test_validateStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.validateStringify(input),
    ObjectPrimitive.SPOILERS,
);
