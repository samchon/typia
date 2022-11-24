import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_generic_alias = _test_is(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createIs<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
