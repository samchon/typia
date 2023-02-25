import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectGenericArray = _test_validateStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createValidateStringify<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
