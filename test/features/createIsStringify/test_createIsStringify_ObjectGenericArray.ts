import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectGenericArray = _test_isStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    TSON.createIsStringify<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
