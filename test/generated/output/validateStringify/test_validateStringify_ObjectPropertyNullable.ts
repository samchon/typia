import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ObjectPropertyNullable = _test_validateStringify("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input) => ((input: ObjectPropertyNullable): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ObjectPropertyNullable> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectPropertyNullable => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["boolean" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "boolean",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.value && !Number.isNaN(input.value) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectPropertyNullable.IMember>",
                value: input.value
            })) && $vo4(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<ObjectPropertyNullable.IMember>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), undefined === input.grade || "number" === typeof input.grade && !Number.isNaN(input.grade) || $report(_exceptionable, {
                path: _path + ".grade",
                expected: "(number | undefined)",
                value: input.grade
            }), undefined === input.serial || "number" === typeof input.serial && !Number.isNaN(input.serial) || $report(_exceptionable, {
                path: _path + ".serial",
                expected: "(number | undefined)",
                value: input.serial
            }), "boolean" === typeof input.activated || $report(_exceptionable, {
                path: _path + ".activated",
                expected: "boolean",
                value: input.activated
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
            value: input
        })) && ((input.length === 4 || $report(true, {
            path: _path + "",
            expected: "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
            value: input
        })) && [
            (Array.isArray(input[0]) || $report(true, {
                path: _path + "[0]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>",
                value: input[0]
            })) && input[0].map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[0][" + _index1 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<boolean>>",
                value: elem
            })) && $vo0(elem, _path + "[0][" + _index1 + "]", true) || $report(true, {
                path: _path + "[0][" + _index1 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<boolean>>",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "[0]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>",
                value: input[0]
            }),
            (Array.isArray(input[1]) || $report(true, {
                path: _path + "[1]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<number>>>",
                value: input[1]
            })) && input[1].map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[1][" + _index2 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<number>>",
                value: elem
            })) && $vo1(elem, _path + "[1][" + _index2 + "]", true) || $report(true, {
                path: _path + "[1][" + _index2 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<number>>",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "[1]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<number>>>",
                value: input[1]
            }),
            (Array.isArray(input[2]) || $report(true, {
                path: _path + "[2]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<string>>>",
                value: input[2]
            })) && input[2].map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[2][" + _index3 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<string>>",
                value: elem
            })) && $vo2(elem, _path + "[2][" + _index3 + "]", true) || $report(true, {
                path: _path + "[2][" + _index3 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<string>>",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "[2]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<string>>>",
                value: input[2]
            }),
            (Array.isArray(input[3]) || $report(true, {
                path: _path + "[3]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>",
                value: input[3]
            })) && input[3].map((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[3][" + _index4 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                value: elem
            })) && $vo3(elem, _path + "[3][" + _index4 + "]", true) || $report(true, {
                path: _path + "[3][" + _index4 + "]",
                expected: "Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "[3]",
                expected: "Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>",
                value: input[3]
            })
        ].every((flag: boolean) => flag)) || $report(true, {
            path: _path + "",
            expected: "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectPropertyNullable>;
}; const stringify = (input: ObjectPropertyNullable): string => {
    const $string = (typia.validateStringify as any).string;
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    const $so3 = (input: any) => `{"value":${$so4(input.value)}}`;
    const $so4 = (input: any) => `{${undefined === input.grade ? "" : `"grade":${undefined !== input.grade ? input.grade : undefined},`}${undefined === input.serial ? "" : `"serial":${undefined !== input.serial ? input.serial : undefined},`}"id":${$string(input.id)},"name":${$string(input.name)},"activated":${input.activated}}`;
    return `[${`[${input[0].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[1].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[2].map((elem: any) => `{"value":${$string(elem.value)}}`).join(",")}]`},${`[${input[3].map((elem: any) => $so3(elem)).join(",")}]`}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ObjectPropertyNullable.SPOILERS);
