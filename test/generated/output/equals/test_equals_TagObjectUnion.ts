import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_equals_TagObjectUnion = _test_equals<TagObjectUnion>(
    TagObjectUnion,
)((input) =>
    ((
        input: any,
        _exceptionable: boolean = true,
    ): input is Array<TagObjectUnion.Type> => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            7 >= input.value.length &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
            (() => {
                if ("string" === typeof input.value)
                    return $io1(input, true && _exceptionable);
                if (
                    "number" === typeof input.value &&
                    Number.isFinite(input.value)
                )
                    return $io0(input, true && _exceptionable);
                return false;
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $iu0(elem, true),
            )
        );
    })(input),
);
