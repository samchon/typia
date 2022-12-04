import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectUndefined = _test_validateParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createValidateParse<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
