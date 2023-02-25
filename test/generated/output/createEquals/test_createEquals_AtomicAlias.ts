import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_AtomicAlias = _test_equals("AtomicAlias", AtomicAlias.generate, (input: any, _exceptionable: boolean): input is AtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]);
});
