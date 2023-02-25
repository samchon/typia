import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ToJsonUnion = _test_validateClone("ToJsonUnion", ToJsonUnion.generate, (input: any): typia.IValidation<typia.Primitive<ToJsonUnion>> => { const validate = (input: any): typia.IValidation<ToJsonUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.mobile || $report(_exceptionable, {
                path: _path + ".mobile",
                expected: "string",
                value: input.mobile
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.id)
                return $vo0(input, _path, true && _exceptionable);
            return $vo1(input, _path, false && _exceptionable) || $vo2(input, _path, false && _exceptionable) || $vo3(input, _path, false && _exceptionable);
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
            value: input
        })) && input.map((elem: any, _index1: number) => (null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        })) && (undefined !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        })) && ("string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        }))).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ToJsonUnion>;
}; const clone = (input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
    const $throws = (typia.createValidateClone as any).throws;
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any) => "string" === typeof input.manufacturer && "string" === typeof input.brand && "string" === typeof input.name;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $io0(input);
        if (undefined !== input.manufacturer)
            return $io1(input);
        return false;
    })();
    const $co0 = (input: any) => ({
        id: input.id,
        mobile: input.mobile,
        name: input.name
    });
    const $co1 = (input: any) => ({
        manufacturer: input.manufacturer,
        brand: input.brand,
        name: input.name
    });
    const $cu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $co0(input);
        if (undefined !== input.manufacturer)
            return $co1(input);
        $throws({
            expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() : "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; });
