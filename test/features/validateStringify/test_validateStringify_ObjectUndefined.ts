import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_validateStringify_ObjectUndefined = _test_validateStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validateStringify(input),
    ObjectUndefined.SPOILERS,
);
