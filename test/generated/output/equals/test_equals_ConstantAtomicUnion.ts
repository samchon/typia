import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_equals_ConstantAtomicUnion = _test_equals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is Array<ConstantAtomicUnion.Union> => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "key" === input.key &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["key"].some((prop: any) => key === prop))
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        false === elem ||
                        1 === elem ||
                        2 === elem ||
                        "three" === elem ||
                        "four" === elem ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true)),
                )
            );
        })(input),
);
