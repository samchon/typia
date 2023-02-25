import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ObjectUnionDouble = _test_validateClone("ObjectUnionDouble", ObjectUnionDouble.generate, (input: any): typia.IValidation<typia.Primitive<ObjectUnionDouble>> => { const validate = (input: any): typia.IValidation<ObjectUnionDouble> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
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
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.x && !Number.isNaN(input.x) || $report(_exceptionable, {
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
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.y && !Number.isNaN(input.y) || $report(_exceptionable, {
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
            })) && input.y.map((elem: any, _index2: number) => "number" === typeof elem && !Number.isNaN(elem) || $report(_exceptionable, {
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
}; const clone = (input: ObjectUnionDouble): typia.Primitive<ObjectUnionDouble> => {
    const $throws = (typia.createValidateClone as any).throws;
    const $io0 = (input: any) => "object" === typeof input.value && null !== input.value && $io1(input.value) && ("object" === typeof input.child && null !== input.child && $iu0(input.child));
    const $io1 = (input: any) => "number" === typeof input.x;
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && $io3(input.value);
    const $io3 = (input: any) => "boolean" === typeof input.y;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && $io5(input.value);
    const $io5 = (input: any) => "number" === typeof input.y;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && $io7(input.value) && ("object" === typeof input.child && null !== input.child && $iu1(input.child));
    const $io7 = (input: any) => "string" === typeof input.x;
    const $io8 = (input: any) => "object" === typeof input.value && null !== input.value && $io9(input.value);
    const $io9 = (input: any) => "string" === typeof input.y;
    const $io10 = (input: any) => "object" === typeof input.value && null !== input.value && $io11(input.value);
    const $io11 = (input: any) => Array.isArray(input.y) && input.y.every((elem: any) => "number" === typeof elem);
    const $iu0 = (input: any) => $io2(input) || $io4(input);
    const $iu1 = (input: any) => $io8(input) || $io10(input);
    const $iu2 = (input: any) => $io0(input) || $io6(input);
    const $co0 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co1(input.value) : input.value,
        child: "object" === typeof input.child && null !== input.child ? $cu0(input.child) : input.child
    });
    const $co1 = (input: any) => ({
        x: input.x
    });
    const $co2 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co3(input.value) : input.value
    });
    const $co3 = (input: any) => ({
        y: input.y
    });
    const $co4 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co5(input.value) : input.value
    });
    const $co5 = (input: any) => ({
        y: input.y
    });
    const $co6 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co7(input.value) : input.value,
        child: "object" === typeof input.child && null !== input.child ? $cu1(input.child) : input.child
    });
    const $co7 = (input: any) => ({
        x: input.x
    });
    const $co8 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co9(input.value) : input.value
    });
    const $co9 = (input: any) => ({
        y: input.y
    });
    const $co10 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co11(input.value) : input.value
    });
    const $co11 = (input: any) => ({
        y: Array.isArray(input.y) ? input.y.map((elem: any) => elem) : input.y
    });
    const $cu0 = (input: any) => (() => {
        if ($io2(input))
            return $co2(input);
        if ($io4(input))
            return $co4(input);
        $throws({
            expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
            value: input
        });
    })();
    const $cu1 = (input: any) => (() => {
        if ($io8(input))
            return $co8(input);
        if ($io10(input))
            return $co10(input);
        $throws({
            expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
            value: input
        });
    })();
    const $cu2 = (input: any) => (() => {
        if ($io0(input))
            return $co0(input);
        if ($io6(input))
            return $co6(input);
        $throws({
            expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu2(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectUnionDouble.SPOILERS);
