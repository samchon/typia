import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectGenericUnion = _test_isClone("ObjectGenericUnion", ObjectGenericUnion.generate, (input: any): typia.Primitive<ISaleEntireArticle> | null => { const is = (input: any): input is ISaleEntireArticle => {
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
}; const clone = (input: ISaleEntireArticle): typia.Primitive<ISaleEntireArticle> => {
    const $throws = (typia.createIsClone as any).throws;
    const $io0 = (input: any) => "string" === typeof input.writer && ("object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io1 = (input: any) => "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io2 = (input: any) => "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any) => "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url;
    const $io4 = (input: any) => "string" === typeof input.writer && ("object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem))) && "string" === typeof input.created_at;
    const $io5 = (input: any) => "number" === typeof input.score && "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $iu0 = (input: any) => $io0(input) || $io4(input);
    const $co0 = (input: any) => ({
        writer: input.writer,
        answer: "object" === typeof input.answer && null !== input.answer ? $co1(input.answer) : input.answer,
        id: input.id,
        hit: input.hit,
        contents: Array.isArray(input.contents) ? input.contents.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input.contents,
        created_at: input.created_at
    });
    const $co1 = (input: any) => ({
        id: input.id,
        hit: input.hit,
        contents: Array.isArray(input.contents) ? input.contents.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input.contents,
        created_at: input.created_at
    });
    const $co2 = (input: any) => ({
        id: input.id,
        created_at: input.created_at,
        title: input.title,
        body: input.body,
        files: Array.isArray(input.files) ? input.files.map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem) : input.files
    });
    const $co3 = (input: any) => ({
        name: input.name,
        extension: input.extension,
        url: input.url
    });
    const $co4 = (input: any) => ({
        writer: input.writer,
        answer: "object" === typeof input.answer && null !== input.answer ? $co1(input.answer) : input.answer,
        id: input.id,
        hit: input.hit,
        contents: Array.isArray(input.contents) ? input.contents.map((elem: any) => "object" === typeof elem && null !== elem ? $co5(elem) : elem) : input.contents,
        created_at: input.created_at
    });
    const $co5 = (input: any) => ({
        score: input.score,
        id: input.id,
        created_at: input.created_at,
        title: input.title,
        body: input.body,
        files: Array.isArray(input.files) ? input.files.map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem) : input.files
    });
    const $cu0 = (input: any) => (() => {
        if ($io0(input))
            return $co0(input);
        if ($io4(input))
            return $co4(input);
        $throws({
            expected: "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
            value: input
        });
    })();
    return "object" === typeof input && null !== input ? $cu0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectGenericUnion.SPOILERS);
