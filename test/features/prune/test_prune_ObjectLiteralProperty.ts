import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_prune_ObjectLiteralProperty = _test_prune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.prune(input),
);
