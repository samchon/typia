import typia from "../../../../src";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_createIsPrune_ObjectGenericUnion = _test_isPrune("ObjectGenericUnion", ObjectGenericUnion.generate, (input: any): input is ObjectGenericUnion => { const is = (input: any): input is ObjectGenericUnion => {
    const $io0 = (input: any): boolean => "string" === typeof input.writer && (null === input.answer || "object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && ("number" === typeof input.hit && Number.isFinite(input.hit)) && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && ("number" === typeof input.hit && Number.isFinite(input.hit)) && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io2 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any): boolean => (null === input.extension || "string" === typeof input.extension) && "string" === typeof input.name && "string" === typeof input.url;
    const $io4 = (input: any): boolean => "string" === typeof input.writer && (null === input.answer || "object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && ("number" === typeof input.hit && Number.isFinite(input.hit)) && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem))) && "string" === typeof input.created_at;
    const $io5 = (input: any): boolean => "number" === typeof input.score && Number.isFinite(input.score) && "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $iu0 = (input: any): any => (() => {
        if ($io4(input))
            return $io4(input);
        if ($io0(input))
            return $io0(input);
        return false;
    })();
    return "object" === typeof input && null !== input && $iu0(input);
}; const prune = (input: ObjectGenericUnion): void => {
    const $io0 = (input: any): boolean => "string" === typeof input.writer && (null === input.answer || "object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io2 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any): boolean => (null === input.extension || "string" === typeof input.extension) && "string" === typeof input.name && "string" === typeof input.url;
    const $io4 = (input: any): boolean => "string" === typeof input.writer && (null === input.answer || "object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem))) && "string" === typeof input.created_at;
    const $io5 = (input: any): boolean => "number" === typeof input.score && "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $throws = (typia.createIsPrune as any).throws;
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po2(elem);
    });
    const $pp1 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po3(elem);
    });
    const $pp2 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po5(elem);
    });
    const $po0 = (input: any): any => {
        if ("object" === typeof input.answer && null !== input.answer)
            $po1(input.answer);
        if (Array.isArray(input.contents))
            $pp0(input.contents);
        for (const key of Object.keys(input)) {
            if ("writer" === key || "answer" === key || "id" === key || "hit" === key || "contents" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        if (Array.isArray(input.contents))
            $pp0(input.contents);
        for (const key of Object.keys(input)) {
            if ("id" === key || "hit" === key || "contents" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        if (Array.isArray(input.files))
            $pp1(input.files);
        for (const key of Object.keys(input)) {
            if ("id" === key || "created_at" === key || "title" === key || "body" === key || "files" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("extension" === key || "name" === key || "url" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any): any => {
        if ("object" === typeof input.answer && null !== input.answer)
            $po1(input.answer);
        if (Array.isArray(input.contents))
            $pp2(input.contents);
        for (const key of Object.keys(input)) {
            if ("writer" === key || "answer" === key || "id" === key || "hit" === key || "contents" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po5 = (input: any): any => {
        if (Array.isArray(input.files))
            $pp1(input.files);
        for (const key of Object.keys(input)) {
            if ("score" === key || "id" === key || "created_at" === key || "title" === key || "body" === key || "files" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any): any => (() => {
        if ($io4(input))
            return $po4(input);
        if ($io0(input))
            return $po0(input);
        $throws({
            expected: "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
            value: input
        });
    })();
    if ("object" === typeof input && null !== input)
        $pu0(input);
}; if (!is(input))
    return false; prune(input); return true; }, ObjectGenericUnion.SPOILERS);
