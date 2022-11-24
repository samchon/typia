import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_alias = _test_clone(
    "aliased object",
    ObjectAlias.generate,
    TSON.createClone<ObjectAlias>(),
);
