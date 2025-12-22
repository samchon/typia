import { tags } from "typia";

import IDepartment from "./IDepartment";
import ICompany from "./IEmployee";
import IEmployee from "./IEmployee";

export default interface IApplication {
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
