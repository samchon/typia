import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectLiteralType = _test_prune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.prune(input),
);
