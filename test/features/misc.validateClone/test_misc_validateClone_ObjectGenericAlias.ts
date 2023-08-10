import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_validateClone_ObjectGenericAlias =
    _test_misc_validateClone<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        typia.misc.validateClone<ObjectGenericAlias>(input),
    );
