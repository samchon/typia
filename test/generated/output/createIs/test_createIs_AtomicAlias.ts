import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { AtomicAlias } from "../../../structures/AtomicAlias";
export const test_createIs_AtomicAlias = _test_is("AtomicAlias", AtomicAlias.generate, (input: any): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}, AtomicAlias.SPOILERS);
