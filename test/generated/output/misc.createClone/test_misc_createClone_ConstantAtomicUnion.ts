import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_misc_clone_ConstantAtomicUnion = _test_misc_clone(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
    (input: ConstantAtomicUnion): typia.Primitive<ConstantAtomicUnion> => {
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co0(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            key: input.key as any,
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
    },
);
