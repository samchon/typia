import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_ObjectUnionDouble = _test_validateParse("ObjectUnionDouble", ObjectUnionDouble.generate, (input: string): typia.IValidation<typia.Primitive<ObjectUnionDouble>> => { const validate = (input: any): typia.IValidation<ObjectUnionDouble> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionDouble => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type>",
                value: input.value
            })) && $vo1(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type>",
                value: input.value
            }), ("object" === typeof input.child && null !== input.child || $report(_exceptionable, {
                path: _path + ".child",
                expected: "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                value: input.child
            })) && $vu0(input.child, _path + ".child", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".child",
                expected: "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                value: input.child
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.x || $report(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o1>",
                value: input.value
            })) && $vo3(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o1>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["boolean" === typeof input.y || $report(_exceptionable, {
                path: _path + ".y",
                expected: "boolean",
                value: input.y
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o2>",
                value: input.value
            })) && $vo5(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o2>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.y || $report(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            })].every((flag: boolean) => flag);
        const $vo6 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o3>",
                value: input.value
            })) && $vo7(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o3>",
                value: input.value
            }), ("object" === typeof input.child && null !== input.child || $report(_exceptionable, {
                path: _path + ".child",
                expected: "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
                value: input.child
            })) && $vu1(input.child, _path + ".child", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".child",
                expected: "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
                value: input.child
            })].every((flag: boolean) => flag);
        const $vo7 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.x || $report(_exceptionable, {
                path: _path + ".x",
                expected: "string",
                value: input.x
            })].every((flag: boolean) => flag);
        const $vo8 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o4>",
                value: input.value
            })) && $vo9(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o4>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo9 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.y || $report(_exceptionable, {
                path: _path + ".y",
                expected: "string",
                value: input.y
            })].every((flag: boolean) => flag);
        const $vo10 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.value && null !== input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o5>",
                value: input.value
            })) && $vo11(input.value, _path + ".value", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".value",
                expected: "Resolve<__type.o5>",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo11 = (input: any, _path: string, _exceptionable: boolean) => [(Array.isArray(input.y) || $report(_exceptionable, {
                path: _path + ".y",
                expected: "Array<number>",
                value: input.y
            })) && input.y.map((elem: any, _index2: number) => "number" === typeof elem || $report(_exceptionable, {
                path: _path + ".y[" + _index2 + "]",
                expected: "number",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".y",
                expected: "Array<number>",
                value: input.y
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => $vo2(input, _path, false && _exceptionable) || $vo4(input, _path, false && _exceptionable);
        const $vu1 = (input: any, _path: string, _exceptionable: boolean) => $vo8(input, _path, false && _exceptionable) || $vo10(input, _path, false && _exceptionable);
        const $vu2 = (input: any, _path: string, _exceptionable: boolean) => $vo0(input, _path, false && _exceptionable) || $vo6(input, _path, false && _exceptionable);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
            value: elem
        })) && $vu2(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectUnionDouble>;
}; input = JSON.parse(input); const output = validate(input); return output; }, ObjectUnionDouble.SPOILERS);
