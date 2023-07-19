import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_assertClone_ObjectGenericAlias =
    _test_misc_assertClone<ObjectGenericAlias>(ObjectGenericAlias)(
        typia.misc.createAssertClone<ObjectGenericAlias>(),
    );
