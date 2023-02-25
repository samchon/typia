import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectGenericArray = _test_validateStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.validateStringify(input),
    ObjectGenericArray.SPOILERS,
);
