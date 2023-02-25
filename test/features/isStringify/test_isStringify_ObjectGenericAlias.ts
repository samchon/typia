import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectGenericAlias = _test_isStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isStringify(input),
    ObjectGenericAlias.SPOILERS,
);
