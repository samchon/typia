import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectGenericArray = _test_assertParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.assertParse<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
