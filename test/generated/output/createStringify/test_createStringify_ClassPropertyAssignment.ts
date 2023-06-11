import typia from "../../../../src";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_ClassPropertyAssignment = _test_stringify("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: ClassPropertyAssignment): string => {
    const $number = (typia.createStringify as any).number;
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $so0 = (input: any): any => `{"id":${$number(input.id)},"name":${$string(input.name)},"note":${(() => {
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
});
