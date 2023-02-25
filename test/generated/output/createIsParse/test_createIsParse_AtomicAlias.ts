import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_AtomicAlias = _test_isParse("AtomicAlias", AtomicAlias.generate, (input: any): typia.Primitive<AtomicAlias> => { const is = (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, AtomicAlias.SPOILERS);
