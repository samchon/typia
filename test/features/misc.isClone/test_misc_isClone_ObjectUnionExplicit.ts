import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_isClone_ObjectUnionExplicit =
    _test_misc_isClone<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
        typia.misc.isClone<ObjectUnionExplicit>(input),
    );
