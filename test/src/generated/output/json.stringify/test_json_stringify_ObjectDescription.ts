import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_stringify_ObjectDescription = _test_json_stringify(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  ((input: ObjectDescription): string => {
    const $string = (typia.json.stringify as any).string;
    const $number = (typia.json.stringify as any).number;
    const $so0 = (input: any): any =>
      `{"id":${$string(input.id)},"deprecated":${
        input.deprecated
      },"title":${$string(input.title)},"descriptions":${`[${input.descriptions
        .map((elem: any) => $string(elem))
        .join(",")}]`},"newLine":${$number(input.newLine)}}`;
    return $so0(input);
  })(input),
);
