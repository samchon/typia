import typia from "typia";

interface IApplication {
  array(i: number[]): void;
}
typia.llm.application<IApplication>();
