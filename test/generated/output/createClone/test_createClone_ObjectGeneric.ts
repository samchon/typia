import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectGeneric = _test_clone("ObjectGeneric", ObjectGeneric.generate, (input: ObjectGeneric): typia.Primitive<ObjectGeneric> => {
    const $io0 = (input: any) => "boolean" === typeof input.value && ("object" === typeof input.child && null !== input.child && $io1(input.child)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any) => "boolean" === typeof input.child_value && "boolean" === typeof input.child_next;
    const $io2 = (input: any) => "number" === typeof input.value && ("object" === typeof input.child && null !== input.child && $io3(input.child)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any) => "number" === typeof input.child_value && "number" === typeof input.child_next;
    const $io4 = (input: any) => "string" === typeof input.value && ("object" === typeof input.child && null !== input.child && $io5(input.child)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem)));
    const $io5 = (input: any) => "string" === typeof input.child_value && "string" === typeof input.child_next;
    const $co0 = (input: any) => ({
        value: input.value,
        child: "object" === typeof input.child && null !== input.child ? $co1(input.child) : input.child,
        elements: Array.isArray(input.elements) ? input.elements.map((elem: any) => "object" === typeof elem && null !== elem ? $co1(elem) : elem) : input.elements
    });
    const $co1 = (input: any) => ({
        child_value: input.child_value,
        child_next: input.child_next
    });
    const $co2 = (input: any) => ({
        value: input.value,
        child: "object" === typeof input.child && null !== input.child ? $co3(input.child) : input.child,
        elements: Array.isArray(input.elements) ? input.elements.map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem) : input.elements
    });
    const $co3 = (input: any) => ({
        child_value: input.child_value,
        child_next: input.child_next
    });
    const $co4 = (input: any) => ({
        value: input.value,
        child: "object" === typeof input.child && null !== input.child ? $co5(input.child) : input.child,
        elements: Array.isArray(input.elements) ? input.elements.map((elem: any) => "object" === typeof elem && null !== elem ? $co5(elem) : elem) : input.elements
    });
    const $co5 = (input: any) => ({
        child_value: input.child_value,
        child_next: input.child_next
    });
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io2(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io4(input[2]))) ? [
        "object" === typeof input[0] && null !== input[0] ? $co0(input[0]) : input[0],
        "object" === typeof input[1] && null !== input[1] ? $co2(input[1]) : input[1],
        "object" === typeof input[2] && null !== input[2] ? $co4(input[2]) : input[2]
    ] : input;
});
