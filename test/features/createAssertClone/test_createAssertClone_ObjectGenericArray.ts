import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectGenericArray = _test_assertClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);