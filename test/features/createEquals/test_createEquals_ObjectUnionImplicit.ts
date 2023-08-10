import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_equals_ObjectUnionImplicit =
    _test_equals<ObjectUnionImplicit>(ObjectUnionImplicit)(
        typia.createEquals<ObjectUnionImplicit>(),
    );
