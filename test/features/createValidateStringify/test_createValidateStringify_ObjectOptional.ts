import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectOptional = _test_validateStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createValidateStringify<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
