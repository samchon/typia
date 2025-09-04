import typia from "typia";

typia.createValidateEquals<IMember>();

interface IMember {
  name: string;
  age: number;
}
