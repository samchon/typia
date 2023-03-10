import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertClone_ObjectGenericArray = _test_assertClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
