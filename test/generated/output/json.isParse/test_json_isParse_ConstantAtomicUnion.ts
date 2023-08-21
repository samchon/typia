import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_isParse_ConstantAtomicUnion = _test_json_isParse(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    ((input: any): typia.Primitive<ConstantAtomicUnion> => {
        const is = (input: any): input is ConstantAtomicUnion => {
            const $io0 = (input: any): boolean => "key" === input.key;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (false === elem ||
                            2 === elem ||
                            1 === elem ||
                            "three" === elem ||
                            "four" === elem ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $io0(elem))),
                )
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
