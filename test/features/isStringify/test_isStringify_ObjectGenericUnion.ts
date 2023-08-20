import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_isStringify_ObjectGenericUnion = _test_isStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isStringify<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
