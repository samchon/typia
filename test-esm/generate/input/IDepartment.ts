import { tags } from "typia";

import IEmployee from "./IEmployee";

export default interface IDepartment {
  id: string & tags.Format<"uuid">;
  code: string;
  sales: number;
  created_at: string & tags.Format<"date-time">;
  children: IDepartment[];
  employees: IEmployee[];
}
