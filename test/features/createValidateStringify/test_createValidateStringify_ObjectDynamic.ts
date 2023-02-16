import typia from "typia";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectDynamic = _test_validateStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createValidateStringify<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
