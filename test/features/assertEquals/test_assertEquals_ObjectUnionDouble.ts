import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertEquals_ObjectUnionDouble = _test_assertEquals(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.assertEquals<ObjectUnionDouble>(input),
);
