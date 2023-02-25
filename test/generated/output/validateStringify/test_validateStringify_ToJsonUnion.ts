import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ToJsonUnion = _test_validateStringify("ToJsonUnion", ToJsonUnion.generate, (input) => ((input: ToJsonUnion): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ToJsonUnion> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
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
}; const stringify = (input: ToJsonUnion): string => {
    const $string = (typia.validateStringify as any).string;
    const $throws = (typia.validateStringify as any).throws;
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any) => "string" === typeof input.manufacturer && "string" === typeof input.brand && "string" === typeof input.name;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $io0(input);
        if (undefined !== input.manufacturer)
            return $io1(input);
        return false;
    })();
    const $so0 = (input: any) => `{"id":${input.id},"mobile":${$string(input.mobile)},"name":${$string(input.name)}}`;
    const $so1 = (input: any) => `{"manufacturer":${$string(input.manufacturer)},"brand":${$string(input.brand)},"name":${$string(input.name)}}`;
    const $su0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $so0(input);
        if (undefined !== input.manufacturer)
            return $so1(input);
        $throws({
            expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => (() => {
        if ("object" === typeof elem && "function" === typeof elem.toJSON)
            return JSON.stringify(elem.toJSON());
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return elem;
        if ("boolean" === typeof elem)
            return elem;
        if ("object" === typeof elem && null !== elem)
            return $su0(elem);
        $throws({
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IProduct> | boolean | number | string | unknown)",
            value: elem
        });
    })()).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input));
