import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { AtomicAlias } from "../../../structures/AtomicAlias";
export const test_createClone_AtomicAlias = _test_clone("AtomicAlias", AtomicAlias.generate, (input: AtomicAlias): typia.Primitive<AtomicAlias> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0] as any,
        input[1] as any,
        input[2] as any
    ] as any : input as any;
});
