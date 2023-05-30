import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createIs_AtomicSimple = _test_is("AtomicSimple", AtomicSimple.generate, (input: any): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
}, AtomicSimple.SPOILERS);
