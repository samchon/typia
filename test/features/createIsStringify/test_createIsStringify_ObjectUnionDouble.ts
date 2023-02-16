import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectUnionDouble = _test_isStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createIsStringify<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
