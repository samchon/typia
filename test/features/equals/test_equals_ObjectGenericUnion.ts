import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectGenericUnion = _test_equals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => TSON.equals(input),
);