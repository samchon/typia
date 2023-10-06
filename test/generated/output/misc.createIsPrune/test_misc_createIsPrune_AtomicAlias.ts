import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_misc_createIsPrune_AtomicAlias = _test_misc_isPrune(
    "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input: any): input is AtomicAlias => {
    const is = (input: any): input is AtomicAlias => {
        return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
        );
    };
    const prune = (input: AtomicAlias): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
});
