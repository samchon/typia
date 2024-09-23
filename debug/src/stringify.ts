import typia from "typia";

interface IMember {
  id: string | null;
  email: string;
  name: string;
  sex: "male" | "female" | 1 | 2 | null;
  age: number | null;
  dead: boolean | null;
}

const input: IMember = {
  id: null,
  email: "someone@someone.com",
  name: "someone",
  sex: "female",
  age: null,
  dead: null,
};
const json: string = typia.json.stringify(input);
console.log(json);
JSON.parse(json);
