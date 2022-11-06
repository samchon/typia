import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_alias = _test_assert_clone(
    "aliased object",
    ObjectAlias.generate,
    TSON.createAssertClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
