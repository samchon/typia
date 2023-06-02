import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createValidateStringify_ObjectDynamic =
    _test_validateStringify(
        "ObjectDynamic",
        ObjectDynamic.generate,
        typia.createValidateStringify<ObjectDynamic>(),
        ObjectDynamic.SPOILERS,
    );
