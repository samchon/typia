import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectGenericUnion = _test_validateClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => TSON.validateClone(input),
    ObjectGenericUnion.SPOILERS,
);
