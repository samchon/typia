import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_validateParse_ObjectPrimitive = _test_validateParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.validateParse<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
