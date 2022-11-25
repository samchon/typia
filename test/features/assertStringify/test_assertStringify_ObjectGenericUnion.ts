import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectGenericUnion = _test_assertStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => TSON.assertStringify(input),
    ObjectGenericUnion.SPOILERS,
);