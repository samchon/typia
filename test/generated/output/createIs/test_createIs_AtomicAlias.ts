import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is } from "../internal/_test_is";
export const test_createIs_AtomicAlias = _test_is("AtomicAlias", AtomicAlias.generate, (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]);
}, AtomicAlias.SPOILERS);
