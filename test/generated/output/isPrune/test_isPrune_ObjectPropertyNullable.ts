import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
export const test_isPrune_ObjectPropertyNullable = _test_isPrune("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input) => ((input: any): input is [Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>] => { const is = (input: any): input is [Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>] => {
    const $io0 = (input: any): boolean => null === input.value || "boolean" === typeof input.value;
    const $io1 = (input: any): boolean => null === input.value || "number" === typeof input.value && Number.isFinite(input.value);
    const $io2 = (input: any): boolean => null === input.value || "string" === typeof input.value;
    const $io3 = (input: any): boolean => null === input.value || "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any): boolean => "string" === typeof input.id && (null === input.name || "string" === typeof input.name) && (undefined === input.grade || "number" === typeof input.grade && Number.isFinite(input.grade)) && (null === input.serial || undefined === input.serial || "number" === typeof input.serial && Number.isFinite(input.serial)) && (null === input.activated || "boolean" === typeof input.activated);
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem))));
}; const prune = (input: [Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>]): void => {
    const $io0 = (input: any): boolean => null === input.value || "boolean" === typeof input.value;
    const $io1 = (input: any): boolean => null === input.value || "number" === typeof input.value;
    const $io2 = (input: any): boolean => null === input.value || "string" === typeof input.value;
    const $io3 = (input: any): boolean => null === input.value || "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any): boolean => "string" === typeof input.id && (null === input.name || "string" === typeof input.name) && (undefined === input.grade || "number" === typeof input.grade) && (null === input.serial || undefined === input.serial || "number" === typeof input.serial) && (null === input.activated || "boolean" === typeof input.activated);
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
            $po4(input.value);
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "grade" === key || "serial" === key || "activated" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem))))) {
        if (Array.isArray(input[0]))
            input[0].forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po0(elem);
            });
        if (Array.isArray(input[1]))
            input[1].forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po1(elem);
            });
        if (Array.isArray(input[2]))
            input[2].forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po2(elem);
            });
        if (Array.isArray(input[3]))
            input[3].forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po3(elem);
            });
    }
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectPropertyNullable.SPOILERS);
