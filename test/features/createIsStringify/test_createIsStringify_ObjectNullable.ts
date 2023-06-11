import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createIsStringify_ObjectNullable = _test_isStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsStringify<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
