import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectAlias = _test_validateClone(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createValidateClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
