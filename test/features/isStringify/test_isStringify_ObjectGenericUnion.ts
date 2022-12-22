import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectGenericUnion = _test_isStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isStringify(input),
    ObjectGenericUnion.SPOILERS,
);
