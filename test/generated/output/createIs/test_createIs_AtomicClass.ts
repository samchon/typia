import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { AtomicClass } from "../../../structures/AtomicClass";
export const test_createIs_AtomicClass = _test_is("AtomicClass", AtomicClass.generate, (input: any): input is AtomicClass => {
    return Array.isArray(input) && (input.length === 9 && ("boolean" === typeof input[0] || input[0] instanceof Boolean) && ("boolean" === typeof input[1] || input[1] instanceof Boolean) && (null !== input[2] && undefined !== input[2] && ("boolean" === typeof input[2] || input[2] instanceof Boolean)) && ("number" === typeof input[3] || input[3] instanceof Number) && ("number" === typeof input[4] || input[4] instanceof Number) && (null !== input[5] && undefined !== input[5] && ("number" === typeof input[5] || input[5] instanceof Number)) && ("string" === typeof input[6] || input[6] instanceof String) && ("string" === typeof input[7] || input[7] instanceof String) && (null !== input[8] && undefined !== input[8] && ("string" === typeof input[8] || input[8] instanceof String)));
}, AtomicClass.SPOILERS);
