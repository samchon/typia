import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_object_generic_alias = _test_assert(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createAssert<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
