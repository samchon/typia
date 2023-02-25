import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ArrayRecursiveUnionImplicit = _test_isStringify("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input) => ((input: ArrayRecursiveUnionImplicit): string | null => { const is = (input: any): input is ArrayRecursiveUnionImplicit => {
    const $io0 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io1 = (input: any) => ("read" === input.access || "write" === input.access) && ("number" === typeof input.id && !Number.isNaN(input.id)) && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io2 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.width && !Number.isNaN(input.width)) && ("number" === typeof input.height && !Number.isNaN(input.height)) && "string" === typeof input.url && ("number" === typeof input.size && !Number.isNaN(input.size));
    const $io3 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.size && !Number.isNaN(input.size)) && "string" === typeof input.content;
    const $io4 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.size && !Number.isNaN(input.size)) && ("number" === typeof input.count && !Number.isNaN(input.count));
    const $io5 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target));
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.access)
            return $io1(input);
        if (undefined !== input.width)
            return $io2(input);
        if (undefined !== input.content)
            return $io3(input);
        if (undefined !== input.count)
            return $io4(input);
        if (undefined !== input.target)
            return $io5(input);
        return $io0(input);
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}; const stringify = (input: ArrayRecursiveUnionImplicit): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io1 = (input: any) => ("read" === input.access || "write" === input.access) && "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io2 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.width && "number" === typeof input.height && "string" === typeof input.url && "number" === typeof input.size;
    const $io3 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "string" === typeof input.content;
    const $io4 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "number" === typeof input.count;
    const $io5 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target));
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.access)
            return $io1(input);
        if (undefined !== input.width)
            return $io2(input);
        if (undefined !== input.content)
            return $io3(input);
        if (undefined !== input.count)
            return $io4(input);
        if (undefined !== input.target)
            return $io5(input);
        return $io0(input);
    })();
    const $so0 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"children":${`[${input.children.map((elem: any) => $su0(elem)).join(",")}]`}}`;
    const $so1 = (input: any) => `{"access":${(() => {
        if ("string" === typeof input.access)
            return $string(input.access);
        if ("string" === typeof input.access)
            return "\"" + input.access + "\"";
        $throws({
            expected: "(\"read\" | \"write\")",
            value: input.access
        });
    })()},"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"children":${`[${input.children.map((elem: any) => $su0(elem)).join(",")}]`}}`;
    const $so2 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"width":${input.width},"height":${input.height},"url":${$string(input.url)},"size":${input.size}}`;
    const $so3 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"size":${input.size},"content":${$string(input.content)}}`;
    const $so4 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"size":${input.size},"count":${input.count}}`;
    const $so5 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"target":${$su0(input.target)}}`;
    const $su0 = (input: any) => (() => {
        if (undefined !== input.access)
            return $so1(input);
        if (undefined !== input.width)
            return $so2(input);
        if (undefined !== input.content)
            return $so3(input);
        if (undefined !== input.count)
            return $so4(input);
        if (undefined !== input.target)
            return $so5(input);
        return $so0(input);
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), ArrayRecursiveUnionImplicit.SPOILERS);
