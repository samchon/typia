import OpenAI from "openai";
import typia from "typia";
import * as __typia_transform__isFormatDate from "typia/lib/internal/_isFormatDate.js";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

const step = async (failure) => {
  const client = new OpenAI({
    apiKey: "<YOUR_OPENAI_API_KEY>",
  });
  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          "I am a new member of the community.",
          "",
          "My name is John Doe, and I am 25 years old.",
          "I like playing basketball and reading books,",
          "and joined to this community at 2022-01-01.",
        ].join("\n"),
      },
      ...(failure
        ? [
            {
              role: "system",
              content: [
                "You A.I. agent had taken a mistak that",
                "returning wrong typed structured data.",
                "",
                "Here is the detailed list of type errors.",
                "Review and correct them at the next step.",
                "",
                "```json",
                JSON.stringify(failure.errors, null, 2),
                "```",
              ].join("\n"),
            },
          ]
        : []),
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "member",
        schema: {
          type: "object",
          properties: {
            email: {
              description: "@format email",
              type: "string",
            },
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
            hobbies: {
              type: "array",
              items: {
                type: "string",
              },
            },
            joined_at: {
              description: "@format date",
              type: "string",
            },
          },
          required: ["email", "name", "age", "hobbies", "joined_at"],
          additionalProperties: false,
          $defs: {},
        },
      },
    },
  });
  const member = JSON.parse(completion.choices[0].message.content);
  return (() => {
    const _io0 = (input) =>
      "string" === typeof input.email &&
      __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
      "string" === typeof input.name &&
      "number" === typeof input.age &&
      Number.isFinite(input.age) &&
      Array.isArray(input.hobbies) &&
      input.hobbies.every((elem) => "string" === typeof elem) &&
      "string" === typeof input.joined_at &&
      __typia_transform__isFormatDate._isFormatDate(input.joined_at);
    const _vo0 = (input, _path, _exceptionable = true) =>
      [
        ("string" === typeof input.email &&
          (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
            _report(_exceptionable, {
              path: _path + ".email",
              expected: 'string & Format<"email">',
              value: input.email,
            }))) ||
          _report(_exceptionable, {
            path: _path + ".email",
            expected: '(string & Format<"email">)',
            value: input.email,
          }),
        "string" === typeof input.name ||
          _report(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          }),
        ("number" === typeof input.age && Number.isFinite(input.age)) ||
          _report(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age,
          }),
        ((Array.isArray(input.hobbies) ||
          _report(_exceptionable, {
            path: _path + ".hobbies",
            expected: "Array<string>",
            value: input.hobbies,
          })) &&
          input.hobbies
            .map(
              (elem, _index2) =>
                "string" === typeof elem ||
                _report(_exceptionable, {
                  path: _path + ".hobbies[" + _index2 + "]",
                  expected: "string",
                  value: elem,
                }),
            )
            .every((flag) => flag)) ||
          _report(_exceptionable, {
            path: _path + ".hobbies",
            expected: "Array<string>",
            value: input.hobbies,
          }),
        ("string" === typeof input.joined_at &&
          (__typia_transform__isFormatDate._isFormatDate(input.joined_at) ||
            _report(_exceptionable, {
              path: _path + ".joined_at",
              expected: 'string & Format<"date">',
              value: input.joined_at,
            }))) ||
          _report(_exceptionable, {
            path: _path + ".joined_at",
            expected: '(string & Format<"date">)',
            value: input.joined_at,
          }),
      ].every((flag) => flag);
    const __is = (input) =>
      "object" === typeof input && null !== input && _io0(input);
    let errors;
    let _report;
    return (input) => {
      if (false === __is(input)) {
        errors = [];
        _report = __typia_transform__validateReport._validateReport(errors);
        ((input, _path, _exceptionable = true) =>
          ((("object" === typeof input && null !== input) ||
            _report(true, {
              path: _path + "",
              expected: "IMember",
              value: input,
            })) &&
            _vo0(input, _path + "", true)) ||
          _report(true, {
            path: _path + "",
            expected: "IMember",
            value: input,
          }))(input, "$input", true);
        const success = 0 === errors.length;
        return success
          ? {
              success,
              data: input,
            }
          : {
              success,
              errors,
              data: input,
            };
      }
      return {
        success: true,
        data: input,
      };
    };
  })()(member);
};
const main = async () => {
  let result = undefined;
  for (let i = 0; i < 2; ++i) {
    if (result && result.success === true) break;
    result = await step(result);
  }
  console.log(result);
};
main().catch(console.error);
