import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectGeneric = _test_validateClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.validateClone(input),
    ObjectGeneric.SPOILERS,
);
