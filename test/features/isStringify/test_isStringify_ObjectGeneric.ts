import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_isStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.isStringify<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);
