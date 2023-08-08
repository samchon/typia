import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_equals_ObjectPropertyNullable = _test_equals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectPropertyNullable => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.value || "boolean" === typeof input.value) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.value ||
                ("number" === typeof input.value &&
                    Number.isFinite(input.value))) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.value || "string" === typeof input.value) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.value ||
                ("object" === typeof input.value &&
                    null !== input.value &&
                    $io4(input.value, true && _exceptionable))) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            (null === input.name || "string" === typeof input.name) &&
            (undefined === input.grade ||
                ("number" === typeof input.grade &&
                    Number.isFinite(input.grade))) &&
            (null === input.serial ||
                undefined === input.serial ||
                ("number" === typeof input.serial &&
                    Number.isFinite(input.serial))) &&
            (null === input.activated ||
                "boolean" === typeof input.activated) &&
            (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "name", "grade", "serial", "activated"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            Array.isArray(input) &&
            input.length === 4 &&
            Array.isArray(input[0]) &&
            input[0].every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
            ) &&
            Array.isArray(input[1]) &&
            input[1].every(
                (elem: any, _index2: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every(
                (elem: any, _index3: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io2(elem, true),
            ) &&
            Array.isArray(input[3]) &&
            input[3].every(
                (elem: any, _index4: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io3(elem, true),
            )
        );
    },
);
