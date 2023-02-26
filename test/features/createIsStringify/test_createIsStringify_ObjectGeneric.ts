import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectGeneric = _test_isStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIsStringify<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
