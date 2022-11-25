import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectGeneric = _test_isClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.isClone(input),
    ObjectGeneric.SPOILERS,
);