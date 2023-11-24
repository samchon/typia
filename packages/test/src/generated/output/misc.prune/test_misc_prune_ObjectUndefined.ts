import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_misc_prune_ObjectUndefined = _test_misc_prune(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  ((input: ObjectUndefined): void => {
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id && "string" === typeof input.name;
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po0(elem);
      });
    const $po0 = (input: any): any => {
      if ("object" === typeof input.classroom && null !== input.classroom)
        $po1(input.classroom);
      for (const key of Object.keys(input)) {
        if (
          "name" === key ||
          "professor" === key ||
          "classroom" === key ||
          "grade" === key ||
          "nothing" === key ||
          "unknown" === key ||
          "never" === key
        )
          continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("id" === key || "name" === key) continue;
        delete input[key];
      }
    };
    if (Array.isArray(input)) $pp0(input);
  })(input),
);
