import { LlmJson, dedent } from "@typia/utils";
import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  active: boolean;
  information: IMemberInformation;
  etc: Record<string, string>;
}
interface IMemberInformation {
  name: string;
  age: number & tags.Type<"uint32">;
  hobbies: string[];
}

const str = dedent`
  Here is the result of function calling:

  \`\`\`json
  {
    /**
     * Thinking... who is the person currently I am talking to?
     */
    "active": tru,
    email: "someone@gmail.com", // primary email address
    etc: ${JSON.stringify({ note: "newbie", level: "beginner" })},
    "information": {
      "name": "John Doe", // name of the user
      "age": "30", // age in years
      hobbies: ["soccer", "cooking", , , , "traveling
`;
const result = LlmJson.parse(str, typia.llm.parameters<IMember>());
console.log(JSON.stringify(result, null, 2));
