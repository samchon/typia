import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createPrune_ObjectLiteralType = _test_prune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createPrune<ObjectLiteralType>(),
);
