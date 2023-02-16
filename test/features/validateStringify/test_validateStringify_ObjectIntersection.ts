import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectIntersection =
    _test_validateStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        (input) => typia.validateStringify(input),
        ObjectIntersection.SPOILERS,
    );
