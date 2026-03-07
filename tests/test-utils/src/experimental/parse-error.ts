import { LlmJson, dedent } from "@typia/utils";

const str = dedent`
  Here is the result of function calling:

  \`\`\`json
  {
    /**
     * Thinking... who is the person currently I am talking to?
     */
    "active": tru,
    "working": abcdefg,
    // "banned": false,
    "name": "John Doe", // name of the user
    "information": {
      "age": 30, // age in years
      email: "someone@gmail.com", // primary email address
      hobbies: ["soccer", "cooking", , , , "traveling
  \`\`\`
`;
const result = LlmJson.parse(str);
console.log(JSON.stringify(result, null, 2));
