import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_ConstantAtomicUnion = _test_prune("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: ConstantAtomicUnion): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("key" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
})(input));
