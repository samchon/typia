import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_generic_alias = _test_clone(
    "generic aliased object",
    ObjectGenericAlias.generate,
    TSON.createClone<ObjectGenericAlias>(),
);
