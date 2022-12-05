import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUndefined = _test_validateClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createValidateClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
