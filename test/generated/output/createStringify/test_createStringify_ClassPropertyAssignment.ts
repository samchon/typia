import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_createStringify_ClassPropertyAssignment = _test_stringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input: ClassPropertyAssignment): string => {
        const $number: any = (typia.createStringify as any).number;
        const $string: any = (typia.createStringify as any).string;
        const $throws: any = (typia.createStringify as any).throws;
        const $so0: any = (input: any): any =>
            `{"id":${$number(input.id)},"name":${$string(
                input.name,
            )},"note":${(() => {
                if ("string" === typeof input.note) return $string(input.note);
                if ("string" === typeof input.note)
                    return '"' + input.note + '"';
                $throws({
                    expected: '"assignment"',
                    value: input.note,
                });
            })()},"editable":${input.editable},"incremental":${
                input.incremental
            }}`;
        return $so0(input);
    },
);
