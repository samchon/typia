import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_misc_createIsPrune_ObjectSimple = _test_misc_isPrune(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input: any): input is ObjectSimple => {
  const is = (input: any): input is ObjectSimple => {
    return (
      "object" === typeof input &&
      null !== input &&
      "object" === typeof (input as any).scale &&
      null !== (input as any).scale &&
      "number" === typeof ((input as any).scale as any).x &&
      Number.isFinite(((input as any).scale as any).x) &&
      "number" === typeof ((input as any).scale as any).y &&
      Number.isFinite(((input as any).scale as any).y) &&
      "number" === typeof ((input as any).scale as any).z &&
      Number.isFinite(((input as any).scale as any).z) &&
      "object" === typeof (input as any).position &&
      null !== (input as any).position &&
      "number" === typeof ((input as any).position as any).x &&
      Number.isFinite(((input as any).position as any).x) &&
      "number" === typeof ((input as any).position as any).y &&
      Number.isFinite(((input as any).position as any).y) &&
      "number" === typeof ((input as any).position as any).z &&
      Number.isFinite(((input as any).position as any).z) &&
      "object" === typeof (input as any).rotate &&
      null !== (input as any).rotate &&
      "number" === typeof ((input as any).rotate as any).x &&
      Number.isFinite(((input as any).rotate as any).x) &&
      "number" === typeof ((input as any).rotate as any).y &&
      Number.isFinite(((input as any).rotate as any).y) &&
      "number" === typeof ((input as any).rotate as any).z &&
      Number.isFinite(((input as any).rotate as any).z) &&
      "object" === typeof (input as any).pivot &&
      null !== (input as any).pivot &&
      "number" === typeof ((input as any).pivot as any).x &&
      Number.isFinite(((input as any).pivot as any).x) &&
      "number" === typeof ((input as any).pivot as any).y &&
      Number.isFinite(((input as any).pivot as any).y) &&
      "number" === typeof ((input as any).pivot as any).z &&
      Number.isFinite(((input as any).pivot as any).z)
    );
  };
  const prune = (input: ObjectSimple): void => {
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
  };
  if (!is(input)) return false;
  prune(input);
  return true;
});
