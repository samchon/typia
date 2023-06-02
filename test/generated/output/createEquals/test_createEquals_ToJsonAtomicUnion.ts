import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_createEquals_ToJsonAtomicUnion = _test_equals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ToJsonAtomicUnion => {
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
                        return true;
                    const value: any = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
            )
        );
    },
);
