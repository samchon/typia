import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertEquals_ObjectInternal = _test_assertEquals(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.assertEquals<ObjectInternal>(input),
);
