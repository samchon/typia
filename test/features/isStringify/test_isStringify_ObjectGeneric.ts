import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.isStringify(input),
    ObjectGeneric.SPOILERS,
);
