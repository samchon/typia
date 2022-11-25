import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_generic_array = _test_validate_equals(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.validateEquals(input),
);
