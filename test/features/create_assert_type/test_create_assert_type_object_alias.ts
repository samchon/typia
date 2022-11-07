import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_alias = _test_assert_type(
    "aliased object",
    ObjectAlias.generate,
    TSON.createAssertType<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
