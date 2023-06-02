import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createIsStringify_ObjectUnionDouble = _test_isStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createIsStringify<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
