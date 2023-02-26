import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createIsStringify_ObjectGenericUnion = _test_isStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createIsStringify<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
