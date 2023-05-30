import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
export const test_createAssertStringify_ToJsonUnion = _test_assertStringify("ToJsonUnion", ToJsonUnion.generate, (input: any): string => { const assert = (input: any): ToJsonUnion => {
    const $guard = (typia.createAssertStringify as any).guard;
    const __is = (input: any): input is ToJsonUnion => {
        const $io0 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.mobile && "string" === typeof input.name;
        const $io1 = (input: any): boolean => true;
        const $io2 = (input: any): boolean => true;
        const $io3 = (input: any): boolean => true;
        const $iu0 = (input: any): any => (() => {
            if (undefined !== input.id)
                return $io0(input);
            return (() => {
                if ($io3(input))
                    return $io3(input);
                if ($io2(input))
                    return $io2(input);
                if ($io1(input))
                    return $io1(input);
                return false;
            })();
        })();
        return Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "object" === typeof elem && null !== elem && $iu0(elem)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ToJsonUnion => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.id && Number.isFinite(input.id) || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            })) && ("string" === typeof input.mobile || $guard(_exceptionable, {
                path: _path + ".mobile",
                expected: "string",
                value: input.mobile
            })) && ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            });
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            });
            const $ao3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            });
            const $au0 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
                if (undefined !== input.id)
                    return $ao0(input, _path, true && _exceptionable);
                return $ao3(input, _path, false && _exceptionable) || $ao2(input, _path, false && _exceptionable) || $ao1(input, _path, false && _exceptionable) || $guard(_exceptionable, {
                    path: _path,
                    expected: "(ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<boolean>)",
                    value: input
                });
            })();
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)>",
                value: input
            })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                value: elem
            })) && (undefined !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                value: elem
            })) && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                value: elem
            })) && $au0(elem, _path + "[" + _index1 + "]", true)));
        })(input, "$input", true);
    return input;
}; const stringify = (input: ToJsonUnion): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $number = (typia.createAssertStringify as any).number;
    const $throws = (typia.createAssertStringify as any).throws;
    const $io0 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any): boolean => "string" === typeof input.manufacturer && "string" === typeof input.brand && "string" === typeof input.name;
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.id)
            return $io0(input);
        if (undefined !== input.manufacturer)
            return $io1(input);
        return false;
    })();
    const $so0 = (input: any): any => `{"id":${$number(input.id)},"mobile":${$string(input.mobile)},"name":${$string(input.name)}}`;
    const $so1 = (input: any): any => `{"manufacturer":${$string(input.manufacturer)},"brand":${$string(input.brand)},"name":${$string(input.name)}}`;
    const $su0 = (input: any): any => (() => {
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
            return $number(elem);
        if ("boolean" === typeof elem)
            return elem;
        if ("object" === typeof elem && null !== elem)
            return $su0(elem);
        $throws({
            expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean | number | string | unknown)",
            value: elem
        });
    })()).join(",")}]`;
}; return stringify(assert(input)); });
