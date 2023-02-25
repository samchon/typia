import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_AtomicSimple = _test_stringify("AtomicSimple", AtomicSimple.generate, (input: AtomicSimple): string => {
    const $string = (typia.createStringify as any).string;
    return `[${input[0]},${input[1]},${$string(input[2])}]`;
});
