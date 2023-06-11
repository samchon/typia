import typia from "../../../src";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_ObjectUnionDouble = _test_isStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.isStringify(input),
    ObjectUnionDouble.SPOILERS,
);
