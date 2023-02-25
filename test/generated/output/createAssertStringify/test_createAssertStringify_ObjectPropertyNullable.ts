import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectPropertyNullable = _test_assertStringify("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input: ObjectPropertyNullable): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectPropertyNullable => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        });
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value && !Number.isNaN(input.value) || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectPropertyNullable.IMember>",
            value: input.value
        })) && $ao4(input.value, _path + ".value", true && _exceptionable);
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (undefined === input.grade || "number" === typeof input.grade && !Number.isNaN(input.grade) || $guard(_exceptionable, {
            path: _path + ".grade",
            expected: "(number | undefined)",
            value: input.grade
        })) && (undefined === input.serial || "number" === typeof input.serial && !Number.isNaN(input.serial) || $guard(_exceptionable, {
            path: _path + ".serial",
            expected: "(number | undefined)",
            value: input.serial
        })) && ("boolean" === typeof input.activated || $guard(_exceptionable, {
            path: _path + ".activated",
            expected: "boolean",
            value: input.activated
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
            value: input
        })) && ((input.length === 4 || $guard(true, {
            path: _path + "",
            expected: "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
            value: input
        })) && ((Array.isArray(input[0]) || $guard(true, {
            path: _path + "[0]",
            expected: "Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>",
            value: input[0]
        })) && input[0].every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[0][" + _index1 + "]",
            expected: "Resolve<ObjectPropertyNullable.IPointer<boolean>>",
            value: elem
        })) && $ao0(elem, _path + "[0][" + _index1 + "]", true))) && ((Array.isArray(input[1]) || $guard(true, {
            path: _path + "[1]",
            expected: "Array<Resolve<ObjectPropertyNullable.IPointer<number>>>",
            value: input[1]
        })) && input[1].every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[1][" + _index2 + "]",
            expected: "Resolve<ObjectPropertyNullable.IPointer<number>>",
            value: elem
        })) && $ao1(elem, _path + "[1][" + _index2 + "]", true))) && ((Array.isArray(input[2]) || $guard(true, {
            path: _path + "[2]",
            expected: "Array<Resolve<ObjectPropertyNullable.IPointer<string>>>",
            value: input[2]
        })) && input[2].every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[2][" + _index3 + "]",
            expected: "Resolve<ObjectPropertyNullable.IPointer<string>>",
            value: elem
        })) && $ao2(elem, _path + "[2][" + _index3 + "]", true))) && ((Array.isArray(input[3]) || $guard(true, {
            path: _path + "[3]",
            expected: "Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>",
            value: input[3]
        })) && input[3].every((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[3][" + _index4 + "]",
            expected: "Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
            value: elem
        })) && $ao3(elem, _path + "[3][" + _index4 + "]", true))));
    })(input, "$input", true);
    return input as ObjectPropertyNullable;
}; const stringify = (input: ObjectPropertyNullable): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    const $so3 = (input: any) => `{"value":${$so4(input.value)}}`;
    const $so4 = (input: any) => `{${undefined === input.grade ? "" : `"grade":${undefined !== input.grade ? input.grade : undefined},`}${undefined === input.serial ? "" : `"serial":${undefined !== input.serial ? input.serial : undefined},`}"id":${$string(input.id)},"name":${$string(input.name)},"activated":${input.activated}}`;
    return `[${`[${input[0].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[1].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[2].map((elem: any) => `{"value":${$string(elem.value)}}`).join(",")}]`},${`[${input[3].map((elem: any) => $so3(elem)).join(",")}]`}]`;
}; return stringify(assert(input)); }, ObjectPropertyNullable.SPOILERS);
