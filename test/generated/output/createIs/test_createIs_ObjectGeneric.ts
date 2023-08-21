import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_is_ObjectGeneric = _test_is("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
)((input: any): input is ObjectGeneric => {
    const $io0 = (input: any): boolean =>
        "boolean" === typeof input.value &&
        "object" === typeof input.child &&
        null !== input.child &&
        "boolean" === typeof (input.child as any).child_value &&
        "boolean" === typeof (input.child as any).child_next &&
        Array.isArray(input.elements) &&
        input.elements.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
        );
    const $io1 = (input: any): boolean =>
        "boolean" === typeof input.child_value &&
        "boolean" === typeof input.child_next;
    const $io2 = (input: any): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        "object" === typeof input.child &&
        null !== input.child &&
        "number" === typeof (input.child as any).child_value &&
        Number.isFinite((input.child as any).child_value) &&
        "number" === typeof (input.child as any).child_next &&
        Number.isFinite((input.child as any).child_next) &&
        Array.isArray(input.elements) &&
        input.elements.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io3(elem),
        );
    const $io3 = (input: any): boolean =>
        "number" === typeof input.child_value &&
        Number.isFinite(input.child_value) &&
        "number" === typeof input.child_next &&
        Number.isFinite(input.child_next);
    const $io4 = (input: any): boolean =>
        "string" === typeof input.value &&
        "object" === typeof input.child &&
        null !== input.child &&
        "string" === typeof (input.child as any).child_value &&
        "string" === typeof (input.child as any).child_next &&
        Array.isArray(input.elements) &&
        input.elements.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io5(elem),
        );
    const $io5 = (input: any): boolean =>
        "string" === typeof input.child_value &&
        "string" === typeof input.child_next;
    return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io2(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io4(input[2])
    );
});
