import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayHierarchical =
    _test_validateStringify(
        "ArrayHierarchical",
        ArrayHierarchical.generate,
        typia.createValidateStringify<ArrayHierarchical>(),
        ArrayHierarchical.SPOILERS,
    );
