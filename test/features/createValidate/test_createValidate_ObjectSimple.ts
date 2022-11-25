import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectSimple = _test_validate(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createValidate<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);