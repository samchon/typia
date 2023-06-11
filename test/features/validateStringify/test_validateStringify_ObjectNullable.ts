import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_validateStringify_ObjectNullable = _test_validateStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.validateStringify(input),
    ObjectNullable.SPOILERS,
);
