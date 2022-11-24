import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_generic_alias = _test_is_stringify(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createIsStringify<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
