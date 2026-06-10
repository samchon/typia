import typia from "typia";

interface IPerson {
  isMyNameSamchon?: boolean;
  HelloTheNewWorld: string;
  ToHTML: string;
}
typia.notations.createKebab<IPerson>();
