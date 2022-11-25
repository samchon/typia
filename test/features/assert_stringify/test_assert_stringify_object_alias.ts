import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_object_alias = _test_assert_stringify(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.assertStringify(input),
    ObjectAlias.SPOILERS,
);
