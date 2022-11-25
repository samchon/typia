import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_generic = _test_validate_equals(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.validateEquals(input),
);
