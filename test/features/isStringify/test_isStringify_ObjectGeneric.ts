import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.isStringify(input),
    ObjectGeneric.SPOILERS,
);