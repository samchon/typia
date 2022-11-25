import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectGenericArray = _test_assertClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.assertClone(input),
    ObjectGenericArray.SPOILERS,
);