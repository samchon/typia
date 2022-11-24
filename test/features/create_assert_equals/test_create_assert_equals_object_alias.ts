import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_object_alias = _test_assert_equals(
    "aliased object",
    ObjectAlias.generate,
    TSON.createAssertEquals<ObjectAlias>(),
);
