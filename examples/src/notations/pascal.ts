import typia from "typia";

interface IPerson {
  is_my_name_samchon?: boolean;
  helloTheNewWorld: string;
  toHTML: string;
}
typia.notations.createPascal<IPerson>();
