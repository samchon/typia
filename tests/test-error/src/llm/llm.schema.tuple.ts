import typia from "typia";

typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});

typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();

typia.llm.application<IApplication>();
typia.llm.application<IApplication>();
typia.llm.application<IApplication>();
typia.llm.application<IApplication>();
typia.llm.application<IApplication>();

interface IProps {
  input: [string, number];
}
export interface IApplication {
  /**
   * Supplies a tuple-bearing method parameter to the application rejection
   * case.
   *
   * The same tuple also appears in direct schema and parameter calls above.
   * Existing repeated calls are retained; repetition adds no separate shape.
   *
   * 1. Build the invalid-call project without ordinary type errors.
   * 2. Require a typia diagnostic naming this source and a written accessor.
   */
  insert(props: IProps): void;
}
