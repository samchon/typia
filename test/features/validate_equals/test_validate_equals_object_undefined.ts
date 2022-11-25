import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_undefined = _test_validate_equals(
    "undefined object",
    ObjectUndefined.generate,
    (input) => TSON.validateEquals(input),
);
