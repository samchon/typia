import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_createIsPrune_ObjectGenericUnion = _test_isPrune("ObjectGenericUnion", ObjectGenericUnion.generate, (input: any): input is ISaleEntireArticle => { const is = (input: any): input is ISaleEntireArticle => {
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
}; const prune = (input: ISaleEntireArticle): void => {
    const $throws = (typia.createIsPrune as any).throws;
    const $io0 = (input: any) => "string" === typeof input.writer && ("object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io1 = (input: any) => "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io2 = (input: any) => "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any) => "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url;
    const $io4 = (input: any) => "string" === typeof input.writer && ("object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem))) && "string" === typeof input.created_at;
    const $io5 = (input: any) => "number" === typeof input.score && "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $iu0 = (input: any) => $io0(input) || $io4(input);
    const $po0 = (input: any) => {
        if ("object" === typeof input.answer && null !== input.answer)
            $po1(input.answer);
        if (Array.isArray(input.contents))
            input.contents.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po2(elem);
            });
        for (const key of Object.keys(input)) {
            if ("writer" === key || "answer" === key || "id" === key || "hit" === key || "contents" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        if (Array.isArray(input.contents))
            input.contents.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po2(elem);
            });
        for (const key of Object.keys(input)) {
            if ("id" === key || "hit" === key || "contents" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any) => {
        if (Array.isArray(input.files))
            input.files.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po3(elem);
            });
        for (const key of Object.keys(input)) {
            if ("id" === key || "created_at" === key || "title" === key || "body" === key || "files" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("name" === key || "extension" === key || "url" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any) => {
        if ("object" === typeof input.answer && null !== input.answer)
            $po1(input.answer);
        if (Array.isArray(input.contents))
            input.contents.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po5(elem);
            });
        for (const key of Object.keys(input)) {
            if ("writer" === key || "answer" === key || "id" === key || "hit" === key || "contents" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po5 = (input: any) => {
        if (Array.isArray(input.files))
            input.files.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po3(elem);
            });
        for (const key of Object.keys(input)) {
            if ("score" === key || "id" === key || "created_at" === key || "title" === key || "body" === key || "files" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any) => (() => {
        if ($io0(input))
            return $po0(input);
        if ($io4(input))
            return $po4(input);
        $throws({
            expected: "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
            value: input
        });
    })();
    if ("object" === typeof input && null !== input)
        $pu0(input);
}; if (!is(input))
    return false; prune(input); return true; }, ObjectGenericUnion.SPOILERS);
