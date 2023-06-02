import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertEquals_ObjectInternal = _test_assertEquals(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createAssertEquals<ObjectInternal>(),
);
