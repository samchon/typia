import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createValidateStringify_ObjectUndefined =
    _test_validateStringify(
        "ObjectUndefined",
        ObjectUndefined.generate,
        typia.createValidateStringify<ObjectUndefined>(),
        ObjectUndefined.SPOILERS,
    );
