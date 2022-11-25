import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectUnionDouble = _test_isStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.isStringify(input),
    ObjectUnionDouble.SPOILERS,
);
