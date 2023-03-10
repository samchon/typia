import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createValidateStringify_ObjectOptional =
    _test_validateStringify(
        "ObjectOptional",
        ObjectOptional.generate,
        typia.createValidateStringify<ObjectOptional>(),
        ObjectOptional.SPOILERS,
    );
