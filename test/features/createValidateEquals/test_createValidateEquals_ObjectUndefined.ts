import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectUndefined = _test_validateEquals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createValidateEquals<ObjectUndefined>(),
);
