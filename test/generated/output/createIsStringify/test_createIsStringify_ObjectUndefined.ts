import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ObjectUndefined = _test_isStringify("ObjectUndefined", ObjectUndefined.generate, (input: ObjectUndefined): string | null => { const is = (input: any): input is ObjectUndefined => {
    const $io0 = (input: any) => "string" === typeof input.name && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor && !Number.isNaN(input.professor)) && (undefined === input.classroom || "object" === typeof input.classroom && null !== input.classroom && $io1(input.classroom)) && ("number" === typeof input.grade && !Number.isNaN(input.grade)) && (null !== input.nothing && undefined === input.nothing) && true && (null !== input.never && undefined === input.never);
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: ObjectUndefined): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    const $so0 = (input: any) => `{${undefined === input.professor ? "" : `"professor":${undefined !== input.professor ? (() => {
        if ("string" === typeof input.professor)
            return $string(input.professor);
        if ("number" === typeof input.professor)
            return input.professor;
        $throws({
            expected: "(number | string | undefined)",
            value: input.professor
        });
    })() : undefined},`}${undefined === input.classroom ? "" : `"classroom":${undefined !== input.classroom ? `{"id":${$string(input.classroom.id)},"name":${$string(input.classroom.name)}}` : undefined},`}${undefined === input.unknown || "function" === typeof input.unknown ? "" : `"unknown":${undefined !== input.unknown ? JSON.stringify(input.unknown) : undefined},`}"name":${$string(input.name)},"grade":${input.grade}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return is(input) ? stringify(input) : null; }, ObjectUndefined.SPOILERS);
