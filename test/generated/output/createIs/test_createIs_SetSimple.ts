import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { SetSimple } from "../../../structures/SetSimple";

export const test_createIs_SetSimple = _test_is(
    "SetSimple",
    SetSimple.generate,
    (input: any): input is SetSimple => {
        const $io0 = (input: any): boolean =>
            input.booleans instanceof Set &&
            [...input.booleans].every(
                (elem: any) => "boolean" === typeof elem,
            ) &&
            input.numbers instanceof Set &&
            [...input.numbers].every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            ) &&
            input.strings instanceof Set &&
            [...input.strings].every((elem: any) => "string" === typeof elem) &&
            input.arrays instanceof Set &&
            [...input.arrays].every(
                (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ),
            ) &&
            input.objects instanceof Set &&
            [...input.objects].every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age);
        return "object" === typeof input && null !== input && $io0(input);
    },
    SetSimple.SPOILERS,
);
