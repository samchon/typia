import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectGenericArray = _test_isParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.isParse<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
