import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_object_generic_alias = _test_validate(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createValidate<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
