import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createIs_ObjectGenericArray = _test_is(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createIs<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
