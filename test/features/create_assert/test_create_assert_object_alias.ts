import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_alias = _test_assert(
    "aliased object",
    ObjectAlias.generate,
    TSON.createAssert<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
