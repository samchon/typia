import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertStringify_ObjectGenericArray = _test_assertStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.assertStringify<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
