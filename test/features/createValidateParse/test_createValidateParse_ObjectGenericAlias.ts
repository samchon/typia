import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectGenericAlias = _test_validateParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createValidateParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
