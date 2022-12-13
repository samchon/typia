import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectUndefined = _test_validateStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createValidateStringify<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);