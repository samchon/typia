import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectNullable = _test_validateStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.validateStringify(input),
    ObjectNullable.SPOILERS,
);
