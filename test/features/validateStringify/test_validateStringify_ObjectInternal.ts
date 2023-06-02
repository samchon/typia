import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_validateStringify_ObjectInternal = _test_validateStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.validateStringify(input),
    ObjectInternal.SPOILERS,
);
