import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_AtomicUnion = _test_stringify("AtomicUnion", AtomicUnion.generate, (input) => ((input: AtomicUnion): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $throws = (typia.stringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return $number(elem);
        if ("boolean" === typeof elem)
            return elem;
        $throws({
            expected: "(boolean | number | string)",
            value: elem
        });
    })()).join(",")}]`;
})(input));
