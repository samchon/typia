import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectGenericArray = _test_isClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createIsClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);