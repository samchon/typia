import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectSimple = _test_validateEquals(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createValidateEquals<ObjectSimple>(),
);
