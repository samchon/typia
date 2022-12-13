import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectGenericArray = _test_assertParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertParse<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
