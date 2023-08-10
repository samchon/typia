import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_validateClone_AtomicAlias =
    _test_misc_validateClone<AtomicAlias>(AtomicAlias)((input) =>
        typia.misc.validateClone<AtomicAlias>(input),
    );
