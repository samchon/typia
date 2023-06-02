import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectUnionExplicit = _test_validateStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidateStringify<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
