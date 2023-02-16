import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectOptional = _test_validateStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validateStringify(input),
    ObjectOptional.SPOILERS,
);
