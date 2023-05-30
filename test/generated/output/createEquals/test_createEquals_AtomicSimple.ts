import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createEquals_AtomicSimple = _test_equals("AtomicSimple", AtomicSimple.generate, (input: any, _exceptionable: boolean = true): input is AtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && "string" === typeof input[2]);
});
