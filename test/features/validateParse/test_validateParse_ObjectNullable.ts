import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectNullable = _test_validateParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.validateParse<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
