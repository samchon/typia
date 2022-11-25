import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectUnionDouble = _test_assertStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    TSON.createAssertStringify<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);