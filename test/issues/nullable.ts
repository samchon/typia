import typia, { tags } from "typia";

interface CreditCase {
  id: number & tags.Type<"uint32">;
  company_name: null | string;
  email: (string & tags.Format<"email">) | null;
  firstname: null | string;
  lastname: null | string;
  mobile_number: null | string;
  phone_number: null | string;

  created_at: Date;
  updated_at: Date;
}

const stringify = typia.json.createAssertStringify<CreditCase>();
const str: string = stringify({
  id: 1,
  company_name: null,
  email: null,
  firstname: null,
  lastname: null,
  mobile_number: null,
  phone_number: null,
  created_at: new Date(),
  updated_at: new Date(),
});
console.log(str);
