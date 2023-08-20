import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertClone_ObjectGenericArray = _test_assertClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.assertClone<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
