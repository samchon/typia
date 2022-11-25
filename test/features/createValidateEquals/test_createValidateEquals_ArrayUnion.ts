import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayUnion = _test_validateEquals(
    "ArrayUnion",
    ArrayUnion.generate,
    TSON.createValidateEquals<ArrayUnion>(),
);
