import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_json_stringify_ClassPropertyAssignment = _test_json_stringify(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  ((input: ClassPropertyAssignment): string => {
    const $number = (typia.json.stringify as any).number;
    const $string = (typia.json.stringify as any).string;
    const $throws = (typia.json.stringify as any).throws;
    const $so0 = (input: any): any =>
      `{"id":${$number(input.id)},"name":${$string(
        input.name,
      )},"note":${(() => {
        if ("string" === typeof input.note) return $string(input.note);
        if ("string" === typeof input.note) return '"' + input.note + '"';
        $throws({
          expected: '"assignment"',
          value: input.note,
        });
      })()},"editable":${input.editable},"incremental":${input.incremental}}`;
    return $so0(input);
  })(input),
);
