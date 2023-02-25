import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectGenericUnion = _test_isParse("ObjectGenericUnion", ObjectGenericUnion.generate, (input: any): typia.Primitive<ISaleEntireArticle> => { const is = (input: any): input is ISaleEntireArticle => {
    const $io0 = (input: any) => "string" === typeof input.writer && ("object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io1 = (input: any) => "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io2 = (input: any) => "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any) => "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url;
    const $io4 = (input: any) => "string" === typeof input.writer && ("object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem))) && "string" === typeof input.created_at;
    const $io5 = (input: any) => "number" === typeof input.score && "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $iu0 = (input: any) => (() => {
        if ($io0(input))
            return $io0(input);
        if ($io4(input))
            return $io4(input);
        return false;
    })();
    return "object" === typeof input && null !== input && $iu0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectGenericUnion.SPOILERS);
