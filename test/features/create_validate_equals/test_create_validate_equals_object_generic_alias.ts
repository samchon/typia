import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_generic_alias =
    _test_validate_equals(
        "generic aliased object",
        ObjectGenericAlias.generate,
        TSON.createValidateEquals<ObjectGenericAlias>(),
    );
