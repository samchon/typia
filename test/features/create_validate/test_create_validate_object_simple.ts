import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_simple = _test_validate(
    "simple object",
    ObjectSimple.generate,
    TSON.createValidate<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
