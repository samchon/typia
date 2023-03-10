import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_createEquals_ClassPropertyAssignment = _test_equals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ClassPropertyAssignment => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "assignment" === input.note &&
            false === input.editable &&
            "boolean" === typeof input.incremental &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["id", "name", "note", "editable", "incremental"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
