import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectGenericArray = _test_isStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.isStringify(input),
    ObjectGenericArray.SPOILERS,
);