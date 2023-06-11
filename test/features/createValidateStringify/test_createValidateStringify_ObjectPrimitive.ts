import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createValidateStringify_ObjectPrimitive =
    _test_validateStringify(
        "ObjectPrimitive",
        ObjectPrimitive.generate,
        typia.createValidateStringify<ObjectPrimitive>(),
        ObjectPrimitive.SPOILERS,
    );
