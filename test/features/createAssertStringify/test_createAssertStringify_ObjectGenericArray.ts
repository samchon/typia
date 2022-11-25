import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectGenericArray = _test_assertStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    TSON.createAssertStringify<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);