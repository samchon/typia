import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectGenericArray = _test_validateEquals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.validateEquals(input),
);