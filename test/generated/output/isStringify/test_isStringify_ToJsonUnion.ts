import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ToJsonUnion = _test_isStringify("ToJsonUnion", ToJsonUnion.generate, (input) => ((input: ToJsonUnion): string | null => { const is = (input: any): input is ToJsonUnion => {
    const $io0 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any) => true;
    const $io2 = (input: any) => true;
    const $io3 = (input: any) => true;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $io0(input);
        return (() => {
            if ($io1(input))
                return $io1(input);
            if ($io2(input))
                return $io2(input);
            if ($io3(input))
                return $io3(input);
            return false;
        })();
    })();
    return Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || "object" === typeof elem && null !== elem && $iu0(elem)));
}; const stringify = (input: ToJsonUnion): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; })(input));
