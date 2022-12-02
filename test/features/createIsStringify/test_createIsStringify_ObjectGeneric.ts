import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    TSON.createIsStringify<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
