import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectGeneric = _test_is(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.is(input),
    ObjectGeneric.SPOILERS,
);