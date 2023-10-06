import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assertEquals_ObjectRequired = _test_assertEquals(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
    typia.assertEquals<ObjectRequired>(input),
);
