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
  insert(props: IProps): void;
}
