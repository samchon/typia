import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createValidateStringify_ObjectRecursive =
    _test_validateStringify(
        "ObjectRecursive",
        ObjectRecursive.generate,
        typia.createValidateStringify<ObjectRecursive>(),
        ObjectRecursive.SPOILERS,
    );
