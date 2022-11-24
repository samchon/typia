import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_generic_alias = _test_assert_clone(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createAssertClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
