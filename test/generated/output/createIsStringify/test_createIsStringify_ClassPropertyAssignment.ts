import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ClassPropertyAssignment = _test_isStringify("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: ClassPropertyAssignment): string | null => { const is = (input: any): input is ClassPropertyAssignment => {
    const $io0 = (input: any) => "number" === typeof input.id && !Number.isNaN(input.id) && "string" === typeof input.name && "assignment" === input.note && false === input.editable && "boolean" === typeof input.incremental;
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: ClassPropertyAssignment): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
    const $so0 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"note":${(() => {
        if ("string" === typeof input.note)
            return $string(input.note);
        if ("string" === typeof input.note)
            return "\"" + input.note + "\"";
        $throws({
            expected: "\"assignment\"",
            value: input.note
        });
    })()},"editable":${input.editable},"incremental":${input.incremental}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, ClassPropertyAssignment.SPOILERS);
