import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_clone_ObjectLiteralProperty = _test_misc_clone(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.misc.createClone<ObjectLiteralProperty>(),
);
