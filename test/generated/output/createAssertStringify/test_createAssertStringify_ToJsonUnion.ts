import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ToJsonUnion = _test_assertStringify("ToJsonUnion", ToJsonUnion.generate, (input: ToJsonUnion): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id && !Number.isNaN(input.id) || $guard(_exceptionable, {
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
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.id)
                return $ao0(input, _path, true && _exceptionable);
            return $ao1(input, _path, false && _exceptionable) || $ao2(input, _path, false && _exceptionable) || $ao3(input, _path, false && _exceptionable) || $guard(_exceptionable, {
                path: _path,
                expected: "(ToJsonUnion.IWrapper<boolean> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        })) && ("string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true)));
    })(input, "$input", true);
    return input as ToJsonUnion;
}; const stringify = (input: ToJsonUnion): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $throws = (typia.createAssertStringify as any).throws;
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
}; return stringify(assert(input)); });
