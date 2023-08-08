import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_misc_prune_ArrayAtomicAlias = _test_misc_prune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) =>
        ((
            input: [
                ArrayAtomicAlias.Alias<boolean>,
                ArrayAtomicAlias.Alias<number>,
                ArrayAtomicAlias.Alias<string>,
            ],
        ): void => {})(input),
);
