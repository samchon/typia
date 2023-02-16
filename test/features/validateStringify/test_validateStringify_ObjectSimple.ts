import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectSimple = _test_validateStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.validateStringify(input),
    ObjectSimple.SPOILERS,
);
