import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
export const test_validateStringify_ObjectGeneric = _test_validateStringify("ObjectGeneric", ObjectGeneric.generate, (input) => ((input: [ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]> => {
    const __is = (input: any): input is [ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>] => {
        const $io0 = (input: any): boolean => "boolean" === typeof input.value && ("object" === typeof input.child && null !== input.child && ("boolean" === typeof input.child.child_value && "boolean" === typeof input.child.child_next)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
        const $io1 = (input: any): boolean => "boolean" === typeof input.child_value && "boolean" === typeof input.child_next;
        const $io2 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value) && ("object" === typeof input.child && null !== input.child && ("number" === typeof input.child.child_value && Number.isFinite(input.child.child_value) && ("number" === typeof input.child.child_next && Number.isFinite(input.child.child_next)))) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
        const $io3 = (input: any): boolean => "number" === typeof input.child_value && Number.isFinite(input.child_value) && ("number" === typeof input.child_next && Number.isFinite(input.child_next));
        const $io4 = (input: any): boolean => "string" === typeof input.value && ("object" === typeof input.child && null !== input.child && ("string" === typeof input.child.child_value && "string" === typeof input.child.child_next)) && (Array.isArray(input.elements) && input.elements.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem)));
        const $io5 = (input: any): boolean => "string" === typeof input.child_value && "string" === typeof input.child_next;
        return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io2(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io4(input[2])));
    };
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is [ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>] => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["boolean" === typeof input.value || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "boolean",
                    value: input.value
                }), ("object" === typeof input.child && null !== input.child || $report(_exceptionable, {
                    path: _path + ".child",
                    expected: "ObjectGeneric.IChild<boolean, boolean>",
                    value: input.child
                })) && $vo1(input.child, _path + ".child", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".child",
                    expected: "ObjectGeneric.IChild<boolean, boolean>",
                    value: input.child
                }), (Array.isArray(input.elements) || $report(_exceptionable, {
                    path: _path + ".elements",
                    expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
                    value: input.elements
                })) && input.elements.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".elements[" + _index1 + "]",
                    expected: "ObjectGeneric.IChild<boolean, boolean>",
                    value: elem
                })) && $vo1(elem, _path + ".elements[" + _index1 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".elements[" + _index1 + "]",
                    expected: "ObjectGeneric.IChild<boolean, boolean>",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".elements",
                    expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
                    value: input.elements
                })].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["boolean" === typeof input.child_value || $report(_exceptionable, {
                    path: _path + ".child_value",
                    expected: "boolean",
                    value: input.child_value
                }), "boolean" === typeof input.child_next || $report(_exceptionable, {
                    path: _path + ".child_next",
                    expected: "boolean",
                    value: input.child_next
                })].every((flag: boolean) => flag);
            const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.value && Number.isFinite(input.value) || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "number",
                    value: input.value
                }), ("object" === typeof input.child && null !== input.child || $report(_exceptionable, {
                    path: _path + ".child",
                    expected: "ObjectGeneric.IChild<number, number>",
                    value: input.child
                })) && $vo3(input.child, _path + ".child", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".child",
                    expected: "ObjectGeneric.IChild<number, number>",
                    value: input.child
                }), (Array.isArray(input.elements) || $report(_exceptionable, {
                    path: _path + ".elements",
                    expected: "Array<ObjectGeneric.IChild<number, number>>",
                    value: input.elements
                })) && input.elements.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".elements[" + _index2 + "]",
                    expected: "ObjectGeneric.IChild<number, number>",
                    value: elem
                })) && $vo3(elem, _path + ".elements[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".elements[" + _index2 + "]",
                    expected: "ObjectGeneric.IChild<number, number>",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".elements",
                    expected: "Array<ObjectGeneric.IChild<number, number>>",
                    value: input.elements
                })].every((flag: boolean) => flag);
            const $vo3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.child_value && Number.isFinite(input.child_value) || $report(_exceptionable, {
                    path: _path + ".child_value",
                    expected: "number",
                    value: input.child_value
                }), "number" === typeof input.child_next && Number.isFinite(input.child_next) || $report(_exceptionable, {
                    path: _path + ".child_next",
                    expected: "number",
                    value: input.child_next
                })].every((flag: boolean) => flag);
            const $vo4 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.value || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value
                }), ("object" === typeof input.child && null !== input.child || $report(_exceptionable, {
                    path: _path + ".child",
                    expected: "ObjectGeneric.IChild<string, string>",
                    value: input.child
                })) && $vo5(input.child, _path + ".child", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".child",
                    expected: "ObjectGeneric.IChild<string, string>",
                    value: input.child
                }), (Array.isArray(input.elements) || $report(_exceptionable, {
                    path: _path + ".elements",
                    expected: "Array<ObjectGeneric.IChild<string, string>>",
                    value: input.elements
                })) && input.elements.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".elements[" + _index3 + "]",
                    expected: "ObjectGeneric.IChild<string, string>",
                    value: elem
                })) && $vo5(elem, _path + ".elements[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".elements[" + _index3 + "]",
                    expected: "ObjectGeneric.IChild<string, string>",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".elements",
                    expected: "Array<ObjectGeneric.IChild<string, string>>",
                    value: input.elements
                })].every((flag: boolean) => flag);
            const $vo5 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.child_value || $report(_exceptionable, {
                    path: _path + ".child_value",
                    expected: "string",
                    value: input.child_value
                }), "string" === typeof input.child_next || $report(_exceptionable, {
                    path: _path + ".child_next",
                    expected: "string",
                    value: input.child_next
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                value: input
            })) && ((input.length === 3 || $report(true, {
                path: _path + "",
                expected: "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                value: input
            })) && [
                ("object" === typeof input[0] && null !== input[0] || $report(true, {
                    path: _path + "[0]",
                    expected: "ObjectGeneric.ISomething<boolean>",
                    value: input[0]
                })) && $vo0(input[0], _path + "[0]", true) || $report(true, {
                    path: _path + "[0]",
                    expected: "ObjectGeneric.ISomething<boolean>",
                    value: input[0]
                }),
                ("object" === typeof input[1] && null !== input[1] || $report(true, {
                    path: _path + "[1]",
                    expected: "ObjectGeneric.ISomething<number>",
                    value: input[1]
                })) && $vo2(input[1], _path + "[1]", true) || $report(true, {
                    path: _path + "[1]",
                    expected: "ObjectGeneric.ISomething<number>",
                    value: input[1]
                }),
                ("object" === typeof input[2] && null !== input[2] || $report(true, {
                    path: _path + "[2]",
                    expected: "ObjectGeneric.ISomething<string>",
                    value: input[2]
                })) && $vo4(input[2], _path + "[2]", true) || $report(true, {
                    path: _path + "[2]",
                    expected: "ObjectGeneric.ISomething<string>",
                    value: input[2]
                })
            ].every((flag: boolean) => flag)) || $report(true, {
                path: _path + "",
                expected: "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: [ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]): string => {
    const $number = (typia.validateStringify as any).number;
    const $string = (typia.validateStringify as any).string;
    const $io1 = (input: any): boolean => "boolean" === typeof input.child_value && "boolean" === typeof input.child_next;
    const $io3 = (input: any): boolean => "number" === typeof input.child_value && "number" === typeof input.child_next;
    const $io5 = (input: any): boolean => "string" === typeof input.child_value && "string" === typeof input.child_next;
    const $so0 = (input: any): any => `{"value":${input.value},"child":${`{"child_value":${input.child.child_value},"child_next":${input.child.child_next}}`},"elements":${`[${input.elements.map((elem: any) => `{"child_value":${elem.child_value},"child_next":${elem.child_next}}`).join(",")}]`}}`;
    const $so2 = (input: any): any => `{"value":${$number(input.value)},"child":${`{"child_value":${$number(input.child.child_value)},"child_next":${$number(input.child.child_next)}}`},"elements":${`[${input.elements.map((elem: any) => `{"child_value":${$number(elem.child_value)},"child_next":${$number(elem.child_next)}}`).join(",")}]`}}`;
    const $so4 = (input: any): any => `{"value":${$string(input.value)},"child":${`{"child_value":${$string(input.child.child_value)},"child_next":${$string(input.child.child_next)}}`},"elements":${`[${input.elements.map((elem: any) => `{"child_value":${$string(elem.child_value)},"child_next":${$string(elem.child_next)}}`).join(",")}]`}}`;
    return `[${$so0(input[0])},${$so2(input[1])},${$so4(input[2])}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ObjectGeneric.SPOILERS);
