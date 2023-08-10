import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_prune_ObjectLiteralProperty =
    _test_misc_prune<ObjectLiteralProperty>(ObjectLiteralProperty)(
        typia.misc.createPrune<ObjectLiteralProperty>(),
    );
