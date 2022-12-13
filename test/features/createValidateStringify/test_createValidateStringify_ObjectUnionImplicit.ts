import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectUnionImplicit = _test_validateStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createValidateStringify<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);