import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectGenericAlias = _test_assertStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertStringify(input),
    ObjectGenericAlias.SPOILERS,
);
