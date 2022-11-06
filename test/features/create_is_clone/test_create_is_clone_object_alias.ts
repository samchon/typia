import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_alias = _test_is_clone(
    "aliased object",
    ObjectAlias.generate,
    TSON.createIsClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
