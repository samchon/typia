import typia from "typia";

interface IPerson {
  is_my_name_samchon?: boolean;
  HelloTheNewWorld: string;
  ToHTML: string;
}
typia.notations.createCamel<IPerson>();
