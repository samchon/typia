import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_set_alias = _test_assert_stringify(
    "aliased set",
    SetAlias.generate,
    (input) => TSON.assertStringify(input),
    SetAlias.SPOILERS,
);
