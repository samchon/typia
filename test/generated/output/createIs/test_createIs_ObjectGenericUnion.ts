import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
export const test_createIs_ObjectGenericUnion = _test_is("ObjectGenericUnion", ObjectGenericUnion.generate, (input: any): input is ObjectGenericUnion => {
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
}, ObjectGenericUnion.SPOILERS);
