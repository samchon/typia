import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectAlias = _test_assertStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.assertStringify(input),
    ObjectAlias.SPOILERS,
);
