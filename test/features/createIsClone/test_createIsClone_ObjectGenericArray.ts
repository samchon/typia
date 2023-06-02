import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createIsClone_ObjectGenericArray = _test_isClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createIsClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
