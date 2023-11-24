import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_stringify_TemplateConstant = _test_json_stringify(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
  ((input: TemplateConstant): string => {
    const $io1 = (input: any): boolean =>
      ("prefix_A" === input.prefix ||
        "prefix_B" === input.prefix ||
        "prefix_C" === input.prefix) &&
      ("3_postfix" === input.postfix ||
        "2_postfix" === input.postfix ||
        "1_postfix" === input.postfix) &&
      ("the_3_value_with_label_A" === input.combined ||
        "the_3_value_with_label_B" === input.combined ||
        "the_3_value_with_label_C" === input.combined ||
        "the_2_value_with_label_A" === input.combined ||
        "the_2_value_with_label_B" === input.combined ||
        "the_2_value_with_label_C" === input.combined ||
        "the_1_value_with_label_A" === input.combined ||
        "the_1_value_with_label_B" === input.combined ||
        "the_1_value_with_label_C" === input.combined);
    const $string = (typia.json.stringify as any).string;
    const $throws = (typia.json.stringify as any).throws;
    const $so0 = (input: any): any =>
      `{"value":${`[${input.value
        .map((elem: any) => $so1(elem))
        .join(",")}]`}}`;
    const $so1 = (input: any): any =>
      `{"prefix":${(() => {
        if ("string" === typeof input.prefix) return $string(input.prefix);
        if ("string" === typeof input.prefix) return '"' + input.prefix + '"';
        $throws({
          expected: '("prefix_A" | "prefix_B" | "prefix_C")',
          value: input.prefix,
        });
      })()},"postfix":${(() => {
        if ("string" === typeof input.postfix) return $string(input.postfix);
        if ("string" === typeof input.postfix) return '"' + input.postfix + '"';
        $throws({
          expected: '("1_postfix" | "2_postfix" | "3_postfix")',
          value: input.postfix,
        });
      })()},"combined":${(() => {
        if ("string" === typeof input.combined) return $string(input.combined);
        if ("string" === typeof input.combined)
          return '"' + input.combined + '"';
        $throws({
          expected:
            '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
          value: input.combined,
        });
      })()}}`;
    return $so0(input);
  })(input),
);
