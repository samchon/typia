import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectGenericArray = _test_validateClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createValidateClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
