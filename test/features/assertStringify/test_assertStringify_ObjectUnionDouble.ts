import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUnionDouble = _test_assertStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.assertStringify(input),
    ObjectUnionDouble.SPOILERS,
);