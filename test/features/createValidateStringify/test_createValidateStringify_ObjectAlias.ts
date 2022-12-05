import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectAlias = _test_validateStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createValidateStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
