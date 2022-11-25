import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectNullable = _test_validateEquals(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.validateEquals(input),
);
