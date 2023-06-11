import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertParse_ObjectGenericArray = _test_assertParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.assertParse<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
