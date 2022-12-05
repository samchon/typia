import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectGenericArray = _test_validateClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.validateClone(input),
    ObjectGenericArray.SPOILERS,
);
