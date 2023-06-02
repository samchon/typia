import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createValidateStringify_ObjectUnionImplicit =
    _test_validateStringify(
        "ObjectUnionImplicit",
        ObjectUnionImplicit.generate,
        typia.createValidateStringify<ObjectUnionImplicit>(),
        ObjectUnionImplicit.SPOILERS,
    );
