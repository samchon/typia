import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectGenericArray = _test_isParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    TSON.createIsParse<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
