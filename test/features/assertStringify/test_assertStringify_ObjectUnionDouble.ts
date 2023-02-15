import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUnionDouble = _test_assertStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertStringify(input),
    ObjectUnionDouble.SPOILERS,
);
