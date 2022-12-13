import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectUnionDouble = _test_isParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.isParse<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
