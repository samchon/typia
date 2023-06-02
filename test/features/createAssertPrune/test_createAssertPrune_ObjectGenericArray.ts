import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertPrune_ObjectGenericArray = _test_assertPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertPrune<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
