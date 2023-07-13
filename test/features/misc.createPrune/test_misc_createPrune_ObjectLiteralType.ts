import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_prune_ObjectLiteralType = _test_misc_prune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.misc.createPrune<ObjectLiteralType>(),
);
