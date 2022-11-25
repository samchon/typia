import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArraySimple = _test_validate(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createValidate<ArraySimple>(),
    ArraySimple.SPOILERS,
);
