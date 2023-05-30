import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
export const test_createIsPrune_ObjectGeneric = _test_isPrune("ObjectGeneric", ObjectGeneric.generate, (input: any): input is ObjectGeneric => { const is = (input: any): input is ObjectGeneric => {
    const $io0 = (input: any): boolean => "boolean" === typeof input.value && ("object" === typeof input.child && null !== input.child && ("boolean" === typeof input.child.child_value && "boolean" === typeof input.child.child_next)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any): boolean => "boolean" === typeof input.child_value && "boolean" === typeof input.child_next;
    const $io2 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value) && ("object" === typeof input.child && null !== input.child && ("number" === typeof input.child.child_value && Number.isFinite(input.child.child_value) && ("number" === typeof input.child.child_next && Number.isFinite(input.child.child_next)))) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any): boolean => "number" === typeof input.child_value && Number.isFinite(input.child_value) && ("number" === typeof input.child_next && Number.isFinite(input.child_next));
    const $io4 = (input: any): boolean => "string" === typeof input.value && ("object" === typeof input.child && null !== input.child && ("string" === typeof input.child.child_value && "string" === typeof input.child.child_next)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem)));
    const $io5 = (input: any): boolean => "string" === typeof input.child_value && "string" === typeof input.child_next;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io2(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io4(input[2])));
}; const prune = (input: ObjectGeneric): void => {
    const $io0 = (input: any): boolean => "boolean" === typeof input.value && ("object" === typeof input.child && null !== input.child && $io1(input.child)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any): boolean => "boolean" === typeof input.child_value && "boolean" === typeof input.child_next;
    const $io2 = (input: any): boolean => "number" === typeof input.value && ("object" === typeof input.child && null !== input.child && $io3(input.child)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any): boolean => "number" === typeof input.child_value && "number" === typeof input.child_next;
    const $io4 = (input: any): boolean => "string" === typeof input.value && ("object" === typeof input.child && null !== input.child && $io5(input.child)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem)));
    const $io5 = (input: any): boolean => "string" === typeof input.child_value && "string" === typeof input.child_next;
    const $po0 = (input: any): any => {
        if ("object" === typeof input.child && null !== input.child)
            $po1(input.child);
        if (Array.isArray(input.elements))
            input.elements.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po1(elem);
            });
        for (const key of Object.keys(input)) {
            if ("value" === key || "child" === key || "elements" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("child_value" === key || "child_next" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        if ("object" === typeof input.child && null !== input.child)
            $po3(input.child);
        if (Array.isArray(input.elements))
            input.elements.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po3(elem);
            });
        for (const key of Object.keys(input)) {
            if ("value" === key || "child" === key || "elements" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("child_value" === key || "child_next" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any): any => {
        if ("object" === typeof input.child && null !== input.child)
            $po5(input.child);
        if (Array.isArray(input.elements))
            input.elements.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po5(elem);
            });
        for (const key of Object.keys(input)) {
            if ("value" === key || "child" === key || "elements" === key)
                continue;
            delete input[key];
        }
    };
    const $po5 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("child_value" === key || "child_next" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io2(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io4(input[2])))) {
        if ("object" === typeof input[0] && null !== input[0])
            $po0(input[0]);
        if ("object" === typeof input[1] && null !== input[1])
            $po2(input[1]);
        if ("object" === typeof input[2] && null !== input[2])
            $po4(input[2]);
    }
}; if (!is(input))
    return false; prune(input); return true; }, ObjectGeneric.SPOILERS);
