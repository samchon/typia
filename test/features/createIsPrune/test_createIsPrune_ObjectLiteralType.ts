import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectLiteralType = _test_isPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createIsPrune<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);