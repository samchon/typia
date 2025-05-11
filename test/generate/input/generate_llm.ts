import { LlmTypeCheckerV3_1 } from "@samchon/openapi";
import typia, { tags } from "typia";

export const schema = typia.llm.schema<
  ICompany,
  "chatgpt",
  { reference: true }
>({});

export const parameters = typia.llm.parameters<
  {
    company: ICompany;
    department: IDepartment;
    employee: IEmployee;
  },
  "claude"
>();

export const application = typia.llm.application<IApplication, "llama">({
  separate: (schema) =>
    LlmTypeCheckerV3_1.isString(schema) && schema.format === "date-time",
});

export const controller = typia.llm.controller<IApplication, "deepseek">(
  "company",
  {
    establishCompany: (props: { company: ICompany }) => props.company,
    createDepartment: (props: { company: ICompany; department: IDepartment }) =>
      props.department,
    hire: async (props: {
      company: ICompany;
      department: IDepartment;
      employee: IEmployee;
    }) => props.employee,
    erase: async (props: { entity: ICompany | IDepartment | IEmployee }) =>
      props.entity.id,
  },
);

export interface IApplication {
  establishCompany(props: { company: ICompany }): ICompany;
  createDepartment(props: {
    company: ICompany;
    department: IDepartment;
  }): IDepartment;
  hire(props: {
    company: ICompany;
    department: IDepartment;
    employee: IEmployee;
  }): Promise<IEmployee>;
  erase(props: {
    entity: ICompany | IDepartment | IEmployee;
  }): Promise<string & tags.Format<"uuid">>;
}

export interface ICompany {
  id: string & tags.Format<"uuid">;
  serial: number;
  name: string;
  established_at: string & tags.Format<"date-time">;
  departments: IDepartment[];
}
export interface IDepartment {
  id: string & tags.Format<"uuid">;
  code: string;
  sales: number;
  created_at: string & tags.Format<"date-time">;
  children: IDepartment[];
  employees: IEmployee[];
}
export interface IEmployee {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number;
  grade: number;
  employed_at: string & tags.Format<"date-time">;
}
