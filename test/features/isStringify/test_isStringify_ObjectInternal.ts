import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectInternal = _test_isStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.isStringify(input),
    ObjectInternal.SPOILERS,
);