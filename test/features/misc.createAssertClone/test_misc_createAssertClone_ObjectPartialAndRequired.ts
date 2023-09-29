import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_createAssertClone_ObjectPartialAndRequired =
    _test_misc_assertClone(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
        typia.misc.createAssertClone<ObjectPartialAndRequired>(),
    );
