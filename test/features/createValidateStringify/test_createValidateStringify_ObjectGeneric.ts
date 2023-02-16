import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectGeneric =
    _test_validateStringify(
        "ObjectGeneric",
        ObjectGeneric.generate,
        typia.createValidateStringify<ObjectGeneric>(),
        ObjectGeneric.SPOILERS,
    );
