import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectUnionDouble = _test_assertParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertParse<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);