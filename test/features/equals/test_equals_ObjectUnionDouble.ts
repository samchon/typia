import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectUnionDouble = _test_equals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.equals(input),
);