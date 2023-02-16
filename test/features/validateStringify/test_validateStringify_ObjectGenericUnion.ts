import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectGenericUnion = _test_validateStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.validateStringify(input),
    ObjectGenericUnion.SPOILERS,
);
