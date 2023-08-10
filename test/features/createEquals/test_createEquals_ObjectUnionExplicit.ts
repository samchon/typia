import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_equals_ObjectUnionExplicit =
    _test_equals<ObjectUnionExplicit>(ObjectUnionExplicit)(
        typia.createEquals<ObjectUnionExplicit>(),
    );
