import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_generic_alias = _test_equals(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createEquals<ObjectGenericAlias>(),
);
