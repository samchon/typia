import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assert_ObjectAlias = _test_assert(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.assert(input),
    ObjectAlias.SPOILERS,
);
