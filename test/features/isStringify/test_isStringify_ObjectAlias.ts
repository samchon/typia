import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectAlias = _test_isStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.isStringify(input),
    ObjectAlias.SPOILERS,
);
