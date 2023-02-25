import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_AtomicAlias = _test_isPrune("AtomicAlias", AtomicAlias.generate, (input) => ((input: any): input is AtomicAlias => { const is = (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]);
}; const prune = (input: AtomicAlias): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), AtomicAlias.SPOILERS);
