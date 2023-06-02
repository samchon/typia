import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_validateClone_ObjectGenericUnion = _test_validateClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.validateClone(input),
    ObjectGenericUnion.SPOILERS,
);
