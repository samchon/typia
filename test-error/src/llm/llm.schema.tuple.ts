import typia from "typia";

typia.llm.schema<string | number, "chatgpt">({});
typia.llm.schema<string | number, "claude">({});
typia.llm.schema<string | number, "gemini">({});
typia.llm.schema<string | number, "3.0">();
typia.llm.schema<string | number, "3.1">({});

typia.llm.parameters<IProps, "chatgpt">();
typia.llm.parameters<IProps, "claude">();
typia.llm.parameters<IProps, "gemini">();
typia.llm.parameters<IProps, "3.0">();
typia.llm.parameters<IProps, "3.1">();

typia.llm.application<IApplication, "chatgpt">();
typia.llm.application<IApplication, "claude">();
typia.llm.application<IApplication, "gemini">();
typia.llm.application<IApplication, "3.0">();
typia.llm.application<IApplication, "3.1">();

interface IProps {
  input: string | number;
}
export interface IApplication {
  insert(props: IProps): void;
}
