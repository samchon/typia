import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectGenericArray = _test_validate(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => TSON.validate(input),
    ObjectGenericArray.SPOILERS,
);