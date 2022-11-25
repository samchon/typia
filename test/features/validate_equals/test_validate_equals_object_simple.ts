import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_simple = _test_validate_equals(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.validateEquals(input),
);
