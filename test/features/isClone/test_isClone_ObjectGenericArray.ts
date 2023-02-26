import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_isClone_ObjectGenericArray = _test_isClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.isClone(input),
    ObjectGenericArray.SPOILERS,
);
