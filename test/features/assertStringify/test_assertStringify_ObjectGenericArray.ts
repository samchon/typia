import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectGenericArray = _test_assertStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.assertStringify(input),
    ObjectGenericArray.SPOILERS,
);