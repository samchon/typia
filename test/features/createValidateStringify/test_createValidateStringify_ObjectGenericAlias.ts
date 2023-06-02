import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidateStringify_ObjectGenericAlias =
    _test_validateStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        typia.createValidateStringify<ObjectGenericAlias>(),
        ObjectGenericAlias.SPOILERS,
    );
