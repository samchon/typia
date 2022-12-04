import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectGeneric = _test_validateParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    TSON.createValidateParse<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
