import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_object_alias = _test_validate_equals(
    "aliased object",
    ObjectAlias.generate,
    TSON.createValidateEquals<ObjectAlias>(),
);
