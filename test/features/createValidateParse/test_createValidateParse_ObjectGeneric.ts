import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectGeneric = _test_validateParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidateParse<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
