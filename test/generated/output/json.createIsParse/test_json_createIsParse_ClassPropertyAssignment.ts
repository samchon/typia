import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_createIsParse_ClassPropertyAssignment =
    _test_json_isParse("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )((input: any): typia.Primitive<ClassPropertyAssignment> => {
        const is = (input: any): input is ClassPropertyAssignment => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "assignment" === input.note &&
                false === input.editable &&
                "boolean" === typeof input.incremental;
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    });
