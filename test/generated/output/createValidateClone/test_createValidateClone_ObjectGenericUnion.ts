import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
export const test_createValidateClone_ObjectGenericUnion = _test_validateClone("ObjectGenericUnion", ObjectGenericUnion.generate, (input: any): typia.IValidation<typia.Primitive<ObjectGenericUnion>> => { const validate = (input: any): typia.IValidation<ObjectGenericUnion> => {
    const __is = (input: any): input is ObjectGenericUnion => {
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
    };
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectGenericUnion => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.writer || $report(_exceptionable, {
                    path: _path + ".writer",
                    expected: "string",
                    value: input.writer
                }), null === input.answer || ("object" === typeof input.answer && null !== input.answer || $report(_exceptionable, {
                    path: _path + ".answer",
                    expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                    value: input.answer
                })) && $vo1(input.answer, _path + ".answer", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".answer",
                    expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                    value: input.answer
                }), "string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "number" === typeof input.hit && Number.isFinite(input.hit) || $report(_exceptionable, {
                    path: _path + ".hit",
                    expected: "number",
                    value: input.hit
                }), (Array.isArray(input.contents) || $report(_exceptionable, {
                    path: _path + ".contents",
                    expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                    value: input.contents
                })) && input.contents.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".contents[" + _index1 + "]",
                    expected: "ObjectGenericUnion.ISaleArticle.IContent",
                    value: elem
                })) && $vo2(elem, _path + ".contents[" + _index1 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".contents[" + _index1 + "]",
                    expected: "ObjectGenericUnion.ISaleArticle.IContent",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".contents",
                    expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                    value: input.contents
                }), "string" === typeof input.created_at || $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "string",
                    value: input.created_at
                })].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "number" === typeof input.hit && Number.isFinite(input.hit) || $report(_exceptionable, {
                    path: _path + ".hit",
                    expected: "number",
                    value: input.hit
                }), (Array.isArray(input.contents) || $report(_exceptionable, {
                    path: _path + ".contents",
                    expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                    value: input.contents
                })) && input.contents.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".contents[" + _index2 + "]",
                    expected: "ObjectGenericUnion.ISaleArticle.IContent",
                    value: elem
                })) && $vo2(elem, _path + ".contents[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".contents[" + _index2 + "]",
                    expected: "ObjectGenericUnion.ISaleArticle.IContent",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".contents",
                    expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                    value: input.contents
                }), "string" === typeof input.created_at || $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "string",
                    value: input.created_at
                })].every((flag: boolean) => flag);
            const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "string" === typeof input.created_at || $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "string",
                    value: input.created_at
                }), "string" === typeof input.title || $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title
                }), "string" === typeof input.body || $report(_exceptionable, {
                    path: _path + ".body",
                    expected: "string",
                    value: input.body
                }), (Array.isArray(input.files) || $report(_exceptionable, {
                    path: _path + ".files",
                    expected: "Array<Omit<ObjectGenericUnion.IAttachmentFile, \"id\">>",
                    value: input.files
                })) && input.files.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".files[" + _index3 + "]",
                    expected: "Omit<ObjectGenericUnion.IAttachmentFile, \"id\">",
                    value: elem
                })) && $vo3(elem, _path + ".files[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".files[" + _index3 + "]",
                    expected: "Omit<ObjectGenericUnion.IAttachmentFile, \"id\">",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".files",
                    expected: "Array<Omit<ObjectGenericUnion.IAttachmentFile, \"id\">>",
                    value: input.files
                })].every((flag: boolean) => flag);
            const $vo3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.extension || "string" === typeof input.extension || $report(_exceptionable, {
                    path: _path + ".extension",
                    expected: "(null | string)",
                    value: input.extension
                }), "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), "string" === typeof input.url || $report(_exceptionable, {
                    path: _path + ".url",
                    expected: "string",
                    value: input.url
                })].every((flag: boolean) => flag);
            const $vo4 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.writer || $report(_exceptionable, {
                    path: _path + ".writer",
                    expected: "string",
                    value: input.writer
                }), null === input.answer || ("object" === typeof input.answer && null !== input.answer || $report(_exceptionable, {
                    path: _path + ".answer",
                    expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                    value: input.answer
                })) && $vo1(input.answer, _path + ".answer", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".answer",
                    expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                    value: input.answer
                }), "string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "number" === typeof input.hit && Number.isFinite(input.hit) || $report(_exceptionable, {
                    path: _path + ".hit",
                    expected: "number",
                    value: input.hit
                }), (Array.isArray(input.contents) || $report(_exceptionable, {
                    path: _path + ".contents",
                    expected: "Array<ObjectGenericUnion.ISaleReview.IContent>",
                    value: input.contents
                })) && input.contents.map((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".contents[" + _index4 + "]",
                    expected: "ObjectGenericUnion.ISaleReview.IContent",
                    value: elem
                })) && $vo5(elem, _path + ".contents[" + _index4 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".contents[" + _index4 + "]",
                    expected: "ObjectGenericUnion.ISaleReview.IContent",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".contents",
                    expected: "Array<ObjectGenericUnion.ISaleReview.IContent>",
                    value: input.contents
                }), "string" === typeof input.created_at || $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "string",
                    value: input.created_at
                })].every((flag: boolean) => flag);
            const $vo5 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.score && Number.isFinite(input.score) || $report(_exceptionable, {
                    path: _path + ".score",
                    expected: "number",
                    value: input.score
                }), "string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "string" === typeof input.created_at || $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "string",
                    value: input.created_at
                }), "string" === typeof input.title || $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title
                }), "string" === typeof input.body || $report(_exceptionable, {
                    path: _path + ".body",
                    expected: "string",
                    value: input.body
                }), (Array.isArray(input.files) || $report(_exceptionable, {
                    path: _path + ".files",
                    expected: "Array<Omit<ObjectGenericUnion.IAttachmentFile, \"id\">>",
                    value: input.files
                })) && input.files.map((elem: any, _index5: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".files[" + _index5 + "]",
                    expected: "Omit<ObjectGenericUnion.IAttachmentFile, \"id\">",
                    value: elem
                })) && $vo3(elem, _path + ".files[" + _index5 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".files[" + _index5 + "]",
                    expected: "Omit<ObjectGenericUnion.IAttachmentFile, \"id\">",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".files",
                    expected: "Array<Omit<ObjectGenericUnion.IAttachmentFile, \"id\">>",
                    value: input.files
                })].every((flag: boolean) => flag);
            const $vu0 = (input: any, _path: string, _exceptionable: boolean = true): any => $vo4(input, _path, false && _exceptionable) || $vo0(input, _path, false && _exceptionable);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                value: input
            })) && $vu0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: ObjectGenericUnion): typia.Primitive<ObjectGenericUnion> => {
    const $throws = (typia.createValidateClone as any).throws;
    const $io0 = (input: any): boolean => "string" === typeof input.writer && (null === input.answer || "object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && "string" === typeof input.created_at;
    const $io2 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any): boolean => (null === input.extension || "string" === typeof input.extension) && "string" === typeof input.name && "string" === typeof input.url;
    const $io4 = (input: any): boolean => "string" === typeof input.writer && (null === input.answer || "object" === typeof input.answer && null !== input.answer && $io1(input.answer)) && "string" === typeof input.id && "number" === typeof input.hit && (Array.isArray(input.contents) && input.contents.every((elem: any) => "object" === typeof elem && null !== elem && $io5(elem))) && "string" === typeof input.created_at;
    const $io5 = (input: any): boolean => "number" === typeof input.score && "string" === typeof input.id && "string" === typeof input.created_at && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $iu0 = (input: any): any => $io4(input) || $io0(input);
    const $co0 = (input: any): any => ({
        writer: input.writer as any,
        answer: "object" === typeof input.answer && null !== input.answer ? $co1(input.answer) : input.answer as any,
        id: input.id as any,
        hit: input.hit as any,
        contents: Array.isArray(input.contents) ? input.contents.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem as any) : input.contents as any,
        created_at: input.created_at as any
    });
    const $co1 = (input: any): any => ({
        id: input.id as any,
        hit: input.hit as any,
        contents: Array.isArray(input.contents) ? input.contents.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem as any) : input.contents as any,
        created_at: input.created_at as any
    });
    const $co2 = (input: any): any => ({
        id: input.id as any,
        created_at: input.created_at as any,
        title: input.title as any,
        body: input.body as any,
        files: Array.isArray(input.files) ? input.files.map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem as any) : input.files as any
    });
    const $co3 = (input: any): any => ({
        extension: input.extension as any,
        name: input.name as any,
        url: input.url as any
    });
    const $co4 = (input: any): any => ({
        writer: input.writer as any,
        answer: "object" === typeof input.answer && null !== input.answer ? $co1(input.answer) : input.answer as any,
        id: input.id as any,
        hit: input.hit as any,
        contents: Array.isArray(input.contents) ? input.contents.map((elem: any) => "object" === typeof elem && null !== elem ? $co5(elem) : elem as any) : input.contents as any,
        created_at: input.created_at as any
    });
    const $co5 = (input: any): any => ({
        score: input.score as any,
        id: input.id as any,
        created_at: input.created_at as any,
        title: input.title as any,
        body: input.body as any,
        files: Array.isArray(input.files) ? input.files.map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem as any) : input.files as any
    });
    const $cu0 = (input: any): any => (() => {
        if ($io4(input))
            return $co4(input);
        if ($io0(input))
            return $co0(input);
        $throws({
            expected: "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
            value: input
        });
    })();
    return "object" === typeof input && null !== input ? $cu0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectGenericUnion.SPOILERS);
