import typia from "typia";

export const test_pr_1169_native_class_regexp = (): void => {
  typia.assert<RegExp>(new RegExp(/(?:)/));
  typia.assert<RegExp>(typia.random<RegExp>());
};
