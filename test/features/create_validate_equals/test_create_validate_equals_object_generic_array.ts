import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_generic_array =
    _test_validate_equals(
        "generic arraied object",
        ObjectGenericArray.generate,
        TSON.createValidateEquals<ObjectGenericArray>(),
    );
