import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
export const test_isPrune_ObjectPrimitive = _test_isPrune("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any): input is ObjectPrimitive.IArticle => { const is = (input: any): input is ObjectPrimitive.IArticle => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && ("md" === input.extension || "html" === input.extension || "txt" === input.extension) && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && "boolean" === typeof input.secret && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at;
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: ObjectPrimitive.IArticle): void => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at;
    const $po0 = (input: any): any => {
        if (Array.isArray(input.files))
            input.files.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po1(elem);
            });
        for (const key of Object.keys(input)) {
            if ("id" === key || "extension" === key || "title" === key || "body" === key || "files" === key || "secret" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "extension" === key || "url" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectPrimitive.SPOILERS);
