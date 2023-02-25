import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectGenericUnion = _test_validateStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createValidateStringify<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
