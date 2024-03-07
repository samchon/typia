import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectSimple } from "../../../structures/ObjectSimple";
export const test_misc_prune_ObjectSimple = _test_misc_prune(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  ((input: ObjectSimple): void => {
    const $io1 = (input: any): boolean =>
      "number" === typeof input.x &&
      "number" === typeof input.y &&
      "number" === typeof input.z;
    const $po0 = (input: any): any => {
      if ("object" === typeof input.scale && null !== input.scale)
        $po1(input.scale);
      if ("object" === typeof input.position && null !== input.position)
        $po1(input.position);
      if ("object" === typeof input.rotate && null !== input.rotate)
        $po1(input.rotate);
      if ("object" === typeof input.pivot && null !== input.pivot)
        $po1(input.pivot);
      for (const key of Object.keys(input)) {
        if (
          "scale" === key ||
          "position" === key ||
          "rotate" === key ||
          "pivot" === key
        )
          continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("x" === key || "y" === key || "z" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
