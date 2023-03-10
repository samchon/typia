import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertParse_ObjectGenericArray = _test_assertParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertParse<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
