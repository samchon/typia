import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_generic_alias = _test_is_clone(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createIsClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
