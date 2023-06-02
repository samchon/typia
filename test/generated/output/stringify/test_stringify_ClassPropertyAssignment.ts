import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_stringify_ClassPropertyAssignment = _test_stringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) =>
        ((input: ClassPropertyAssignment): string => {
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            const $throws: any = (typia.stringify as any).throws;
            const $so0: any = (input: any): any =>
                `{"id":${$number(input.id)},"name":${$string(
                    input.name,
                )},"note":${(() => {
                    if ("string" === typeof input.note)
                        return $string(input.note);
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
        })(input),
);
