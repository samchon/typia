import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectGeneric = _test_validateClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    TSON.createValidateClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
