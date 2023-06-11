import typia from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
export const test_assertEquals_ObjectPrimitive = _test_assertEquals("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any): ObjectPrimitive.IArticle => {
    const __is = (input: any, _exceptionable: boolean = true): input is ObjectPrimitive.IArticle => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && ("md" === input.extension || "html" === input.extension || "txt" === input.extension) && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io1(elem, true && _exceptionable))) && "boolean" === typeof input.secret && "string" === typeof input.created_at && (7 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["id", "extension", "title", "body", "files", "secret", "created_at"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at && (5 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["id", "name", "extension", "url", "created_at"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectPrimitive.IArticle => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("md" === input.extension || "html" === input.extension || "txt" === input.extension || $guard(_exceptionable, {
                path: _path + ".extension",
                expected: "(\"html\" | \"md\" | \"txt\")",
                value: input.extension
            })) && ("string" === typeof input.title || $guard(_exceptionable, {
                path: _path + ".title",
                expected: "string",
                value: input.title
            })) && ("string" === typeof input.body || $guard(_exceptionable, {
                path: _path + ".body",
                expected: "string",
                value: input.body
            })) && ((Array.isArray(input.files) || $guard(_exceptionable, {
                path: _path + ".files",
                expected: "Array<ObjectPrimitive.IFile>",
                value: input.files
            })) && input.files.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".files[" + _index1 + "]",
                expected: "ObjectPrimitive.IFile",
                value: elem
            })) && $ao1(elem, _path + ".files[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".files[" + _index1 + "]",
                expected: "ObjectPrimitive.IFile",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".files",
                expected: "Array<ObjectPrimitive.IFile>",
                value: input.files
            })) && ("boolean" === typeof input.secret || $guard(_exceptionable, {
                path: _path + ".secret",
                expected: "boolean",
                value: input.secret
            })) && ("string" === typeof input.created_at || $guard(_exceptionable, {
                path: _path + ".created_at",
                expected: "string",
                value: input.created_at
            })) && (7 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every((key: any) => {
                if (["id", "extension", "title", "body", "files", "secret", "created_at"].some((prop: any) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            })));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && ("string" === typeof input.extension || $guard(_exceptionable, {
                path: _path + ".extension",
                expected: "string",
                value: input.extension
            })) && ("string" === typeof input.url || $guard(_exceptionable, {
                path: _path + ".url",
                expected: "string",
                value: input.url
            })) && ("string" === typeof input.created_at || $guard(_exceptionable, {
                path: _path + ".created_at",
                expected: "string",
                value: input.created_at
            })) && (5 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every((key: any) => {
                if (["id", "name", "extension", "url", "created_at"].some((prop: any) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            })));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectPrimitive.IArticle",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectPrimitive.IArticle",
                value: input
            });
        })(input, "$input", true);
    return input;
})(input));
