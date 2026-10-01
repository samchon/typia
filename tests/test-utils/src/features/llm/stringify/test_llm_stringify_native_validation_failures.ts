import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

namespace Case_array_element {
  interface IArrayProp {
    scores: number[];
  }

  export const run = (): void => {
    const valid: IArrayProp = { scores: [1, 2, 3] };
    (valid.scores as unknown[])[1] = "two";
    const result = typia.validate<IArrayProp>(valid);
    TestEquality.equals("array_element: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "array_element: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "array_element: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "array_element: contains array index path",
        output.includes("$input.scores[1]"),
        true,
      );
    }
  };
}

namespace Case_array_expected_object {
  interface IExpectsObject {
    data: { x: number; y: number };
  }

  export const run = (): void => {
    const valid: IExpectsObject = { data: { x: 1, y: 2 } };
    (valid.data as { x: unknown }).x = "not-a-number";
    const result = typia.validate<IExpectsObject>(valid);
    TestEquality.equals(
      "array_expected_object: success",
      result.success,
      false,
    );
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "array_expected_object: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "array_expected_object: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "array_expected_object: contains data.x path",
        output.includes("$input.data.x"),
        true,
      );
    }
  };
}

namespace Case_array_of_objects {
  interface IUser {
    name: string;
    age: number;
  }

  interface IUserList {
    users: IUser[];
  }

  export const run = (): void => {
    const valid: IUserList = {
      users: [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
      ],
    };
    (valid.users[1] as { age: unknown }).age = "twenty-five";
    const result = typia.validate<IUserList>(valid);
    TestEquality.equals("array_of_objects: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "array_of_objects: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "array_of_objects: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "array_of_objects: contains array object path",
        output.includes("$input.users[1].age"),
        true,
      );
    }
  };
}

namespace Case_bracket_notation_keys {
  interface IWithSpecialKey1 {
    "my-key": number;
  }

  interface IWithSpecialKey2 {
    "another.key": number;
  }

  interface IWithHyphenKey {
    "data-value": string;
  }

  export const run = (): void => {
    // Test case: Keys that require bracket notation (special characters, hyphens, etc.)
    // This tests extractDirectChildKey with bracket notation pattern (lines 395-408)
    // and NamingConvention.variable check (lines 176-178, 196-198)

    // Test 1: Key with hyphen
    const data1: IWithSpecialKey1 = { "my-key": 123 };
    (data1 as { "my-key": unknown })["my-key"] = "wrong";
    const result1 = typia.validate<IWithSpecialKey1>(data1);
    TestEquality.equals(
      "bracket_notation_keys: hyphen-success",
      result1.success,
      false,
    );
    if (!result1.success) {
      const output1: string = LlmJson.stringify(result1);
      TestEquality.equals(
        "bracket_notation_keys: hyphen-code-block",
        output1.includes("```json"),
        true,
      );
      TestEquality.equals(
        "bracket_notation_keys: hyphen-error-marker",
        output1.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "bracket_notation_keys: hyphen-key",
        output1.includes("my-key"),
        true,
      );
    }

    // Test 2: Key with dot
    const data2: IWithSpecialKey2 = { "another.key": 456 };
    (data2 as { "another.key": unknown })["another.key"] = "wrong";
    const result2 = typia.validate<IWithSpecialKey2>(data2);
    TestEquality.equals(
      "bracket_notation_keys: dot-success",
      result2.success,
      false,
    );
    if (!result2.success) {
      const output2: string = LlmJson.stringify(result2);
      TestEquality.equals(
        "bracket_notation_keys: dot-code-block",
        output2.includes("```json"),
        true,
      );
      TestEquality.equals(
        "bracket_notation_keys: dot-error-marker",
        output2.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "bracket_notation_keys: dot-key",
        output2.includes("another.key"),
        true,
      );
    }

    // Test 3: Key with hyphen (string type)
    const data3: IWithHyphenKey = { "data-value": "test" };
    (data3 as { "data-value": unknown })["data-value"] = 12345;
    const result3 = typia.validate<IWithHyphenKey>(data3);
    TestEquality.equals(
      "bracket_notation_keys: string-hyphen-success",
      result3.success,
      false,
    );
    if (!result3.success) {
      const output3: string = LlmJson.stringify(result3);
      TestEquality.equals(
        "bracket_notation_keys: string-hyphen-code-block",
        output3.includes("```json"),
        true,
      );
      TestEquality.equals(
        "bracket_notation_keys: string-hyphen-error-marker",
        output3.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "bracket_notation_keys: string-hyphen-key",
        output3.includes("data-value"),
        true,
      );
    }
  };
}

namespace Case_complex_object {
  interface IAddress {
    street: string;
    city: string;
    zip: string;
  }

  interface IPerson {
    name: string;
    age: number;
    address: IAddress;
  }

  export const run = (): void => {
    const valid: IPerson = {
      name: "John",
      age: 30,
      address: { street: "123 Main St", city: "NYC", zip: "10001" },
    };
    (valid.address as { zip: unknown }).zip = 10001;
    const result = typia.validate<IPerson>(valid);
    TestEquality.equals("complex_object: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "complex_object: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "complex_object: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "complex_object: contains address.zip path",
        output.includes("$input.address.zip"),
        true,
      );
    }
  };
}

namespace Case_empty_array {
  interface IWithArray {
    items: string[];
  }

  export const run = (): void => {
    const valid: IWithArray = { items: ["a", "b"] };
    (valid as { items: unknown }).items = "not-an-array";
    const result = typia.validate<IWithArray>(valid);
    TestEquality.equals("empty_array: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "empty_array: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "empty_array: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "empty_array: contains items path",
        output.includes("$input.items"),
        true,
      );
    }
  };
}

namespace Case_empty_object {
  interface IRequired {
    name: string;
    age: number;
  }

  export const run = (): void => {
    const invalid: unknown = {};
    const result = typia.validate<IRequired>(invalid);
    TestEquality.equals("empty_object: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "empty_object: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "empty_object: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "empty_object: contains name path",
        output.includes("$input.name"),
        true,
      );
      TestEquality.equals(
        "empty_object: contains age path",
        output.includes("$input.age"),
        true,
      );
    }
  };
}

namespace Case_format_email {
  interface IEmailProp {
    email: string & tags.Format<"email">;
  }

  export const run = (): void => {
    const valid: IEmailProp = { email: "test@example.com" };
    (valid as { email: unknown }).email = "not-an-email";
    const result = typia.validate<IEmailProp>(valid);
    TestEquality.equals("format_email: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "format_email: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "format_email: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "format_email: contains email path",
        output.includes("$input.email"),
        true,
      );
      TestEquality.equals(
        "format_email: contains format info",
        output.includes("Format"),
        true,
      );
    }
  };
}

namespace Case_format_output {
  interface ISimple {
    value: number;
  }

  export const run = (): void => {
    const valid: ISimple = { value: 42 };
    (valid as { value: unknown }).value = "wrong";
    const result = typia.validate<ISimple>(valid);
    TestEquality.equals("format_output: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "format_output: starts with code block",
        output.startsWith("```json"),
        true,
      );
      TestEquality.equals(
        "format_output: ends with code block",
        output.trim().endsWith("```"),
        true,
      );
    }
  };
}

namespace Case_format_url {
  interface IUrlProp {
    url: string & tags.Format<"url">;
  }

  export const run = (): void => {
    const valid: IUrlProp = { url: "https://example.com" };
    (valid as { url: unknown }).url = "not-a-url";
    const result = typia.validate<IUrlProp>(valid);
    TestEquality.equals("format_url: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "format_url: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "format_url: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "format_url: contains url path",
        output.includes("$input.url"),
        true,
      );
    }
  };
}

namespace Case_integer_constraint {
  interface IIntegerProp {
    value: number & tags.Type<"uint32">;
  }

  export const run = (): void => {
    const valid: IIntegerProp = { value: 42 };
    (valid as { value: unknown }).value = 3.14;
    const result = typia.validate<IIntegerProp>(valid);
    TestEquality.equals("integer_constraint: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "integer_constraint: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "integer_constraint: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "integer_constraint: contains value path",
        output.includes("$input.value"),
        true,
      );
    }
  };
}

namespace Case_literal_type {
  interface ILiteralProp {
    status: "active" | "inactive";
  }

  export const run = (): void => {
    const valid: ILiteralProp = { status: "active" };
    (valid as { status: unknown }).status = "unknown";
    const result = typia.validate<ILiteralProp>(valid);
    TestEquality.equals("literal_type: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "literal_type: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "literal_type: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "literal_type: contains status path",
        output.includes("$input.status"),
        true,
      );
    }
  };
}

namespace Case_min_items {
  interface IMinItemsProp {
    items: (string & tags.MinLength<1>)[] & tags.MinItems<2>;
  }

  export const run = (): void => {
    const valid: IMinItemsProp = { items: ["a", "b", "c"] };
    (valid as { items: unknown }).items = ["single"];
    const result = typia.validate<IMinItemsProp>(valid);
    TestEquality.equals("min_items: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "min_items: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "min_items: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "min_items: contains items path",
        output.includes("$input.items"),
        true,
      );
    }
  };
}

namespace Case_min_length {
  interface IMinLengthProp {
    name: string & tags.MinLength<3>;
  }

  export const run = (): void => {
    const valid: IMinLengthProp = { name: "John" };
    (valid as { name: unknown }).name = "Jo";
    const result = typia.validate<IMinLengthProp>(valid);
    TestEquality.equals("min_length: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "min_length: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "min_length: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "min_length: contains name path",
        output.includes("$input.name"),
        true,
      );
    }
  };
}

namespace Case_mixed_nested_errors {
  interface IComplex {
    user: {
      name: string;
      scores: number[];
    };
    metadata: {
      active: boolean;
    };
  }

  export const run = (): void => {
    const valid: IComplex = {
      user: { name: "John", scores: [100, 95, 88] },
      metadata: { active: true },
    };
    (valid.user as { name: unknown }).name = 123;
    (valid.user.scores as unknown[])[1] = "ninety-five";
    (valid.metadata as { active: unknown }).active = "yes";
    const result = typia.validate<IComplex>(valid);
    TestEquality.equals("mixed_nested_errors: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "mixed_nested_errors: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "mixed_nested_errors: contains name error",
        output.includes("$input.user.name"),
        true,
      );
      TestEquality.equals(
        "mixed_nested_errors: contains scores error",
        output.includes("$input.user.scores[1]"),
        true,
      );
      TestEquality.equals(
        "mixed_nested_errors: contains active error",
        output.includes("$input.metadata.active"),
        true,
      );
    }
  };
}

namespace Case_multiple_array_errors {
  interface INumberArray {
    numbers: number[];
  }

  export const run = (): void => {
    const valid: INumberArray = { numbers: [1, 2, 3, 4, 5] };
    (valid.numbers as unknown[])[0] = "one";
    (valid.numbers as unknown[])[2] = "three";
    (valid.numbers as unknown[])[4] = "five";
    const result = typia.validate<INumberArray>(valid);
    TestEquality.equals(
      "multiple_array_errors: success",
      result.success,
      false,
    );
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "multiple_array_errors: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "multiple_array_errors: contains first error",
        output.includes("$input.numbers[0]"),
        true,
      );
      TestEquality.equals(
        "multiple_array_errors: contains second error",
        output.includes("$input.numbers[2]"),
        true,
      );
      TestEquality.equals(
        "multiple_array_errors: contains third error",
        output.includes("$input.numbers[4]"),
        true,
      );
    }
  };
}

namespace Case_multiple_errors {
  interface IMultipleProps {
    name: string;
    age: number;
    active: boolean;
  }

  export const run = (): void => {
    const valid: IMultipleProps = { name: "John", age: 30, active: true };
    (valid as { name: unknown; age: unknown }).name = 123;
    (valid as { name: unknown; age: unknown }).age = "thirty";
    const result = typia.validate<IMultipleProps>(valid);
    TestEquality.equals("multiple_errors: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "multiple_errors: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "multiple_errors: contains name error",
        output.includes("$input.name"),
        true,
      );
      TestEquality.equals(
        "multiple_errors: contains age error",
        output.includes("$input.age"),
        true,
      );
    }
  };
}

namespace Case_nested_array {
  interface INestedArray {
    matrix: number[][];
  }

  export const run = (): void => {
    const valid: INestedArray = {
      matrix: [
        [1, 2],
        [3, 4],
      ],
    };
    (valid.matrix[0] as unknown[])[1] = "two";
    const result = typia.validate<INestedArray>(valid);
    TestEquality.equals("nested_array: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "nested_array: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "nested_array: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "nested_array: contains nested array path",
        output.includes("$input.matrix[0][1]"),
        true,
      );
    }
  };
}

namespace Case_nested_constraint {
  interface INestedConstraint {
    user: {
      email: string & tags.Format<"email">;
      age: number & tags.Minimum<0>;
    };
  }

  export const run = (): void => {
    const valid: INestedConstraint = {
      user: { email: "test@example.com", age: 25 },
    };
    (valid.user as { email: unknown }).email = "invalid-email";
    (valid.user as { age: unknown }).age = -5;
    const result = typia.validate<INestedConstraint>(valid);
    TestEquality.equals("nested_constraint: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "nested_constraint: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "nested_constraint: contains email error",
        output.includes("$input.user.email"),
        true,
      );
      TestEquality.equals(
        "nested_constraint: contains age error",
        output.includes("$input.user.age"),
        true,
      );
    }
  };
}

namespace Case_nested_object {
  interface INested {
    user: {
      name: string;
      age: number;
    };
  }

  export const run = (): void => {
    const valid: INested = { user: { name: "John", age: 30 } };
    (valid.user as { age: unknown }).age = "thirty";
    const result = typia.validate<INested>(valid);
    TestEquality.equals("nested_object: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "nested_object: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "nested_object: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "nested_object: contains nested path",
        output.includes("$input.user.age"),
        true,
      );
    }
  };
}

namespace Case_null_value {
  interface INonNullable {
    value: number;
  }

  export const run = (): void => {
    const valid: INonNullable = { value: 42 };
    (valid as { value: unknown }).value = null;
    const result = typia.validate<INonNullable>(valid);
    TestEquality.equals("null_value: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "null_value: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "null_value: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "null_value: contains value path",
        output.includes("$input.value"),
        true,
      );
    }
  };
}

namespace Case_object_expected_array {
  interface IExpectsArray {
    data: number[];
  }

  export const run = (): void => {
    const valid: IExpectsArray = { data: [1, 2, 3] };
    (valid as { data: unknown }).data = { value: 123 };
    const result = typia.validate<IExpectsArray>(valid);
    TestEquality.equals(
      "object_expected_array: success",
      result.success,
      false,
    );
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "object_expected_array: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "object_expected_array: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "object_expected_array: contains data path",
        output.includes("$input.data"),
        true,
      );
    }
  };
}

namespace Case_object_instead_of_primitive {
  interface IPrimitiveProp {
    count: number;
  }

  export const run = (): void => {
    const valid: IPrimitiveProp = { count: 42 };
    (valid as { count: unknown }).count = { nested: "object" };
    const result = typia.validate<IPrimitiveProp>(valid);
    TestEquality.equals(
      "object_instead_of_primitive: success",
      result.success,
      false,
    );
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "object_instead_of_primitive: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "object_instead_of_primitive: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "object_instead_of_primitive: contains count path",
        output.includes("$input.count"),
        true,
      );
    }
  };
}

namespace Case_object_with_array {
  interface IObjectWithArray {
    id: number;
    tags: string[];
  }

  export const run = (): void => {
    const valid: IObjectWithArray = { id: 1, tags: ["a", "b", "c"] };
    (valid.tags as unknown[])[2] = 999;
    const result = typia.validate<IObjectWithArray>(valid);
    TestEquality.equals("object_with_array: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "object_with_array: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "object_with_array: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "object_with_array: contains tags path",
        output.includes("$input.tags[2]"),
        true,
      );
    }
  };
}

namespace Case_optional_missing {
  interface IRequiredProps {
    name: string;
    email: string;
  }

  export const run = (): void => {
    const invalid: unknown = { name: "John" };
    const result = typia.validate<IRequiredProps>(invalid);
    TestEquality.equals("optional_missing: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "optional_missing: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "optional_missing: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "optional_missing: contains email path",
        output.includes("$input.email"),
        true,
      );
    }
  };
}

namespace Case_pattern_constraint {
  interface IPatternProp {
    code: string & tags.Pattern<"^[A-Z]{3}$">;
  }

  export const run = (): void => {
    const valid: IPatternProp = { code: "ABC" };
    (valid as { code: unknown }).code = "abc123";
    const result = typia.validate<IPatternProp>(valid);
    TestEquality.equals("pattern_constraint: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "pattern_constraint: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "pattern_constraint: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "pattern_constraint: contains code path",
        output.includes("$input.code"),
        true,
      );
    }
  };
}

namespace Case_primitive_boolean {
  interface IBooleanProp {
    active: boolean;
  }

  export const run = (): void => {
    const valid: IBooleanProp = { active: true };
    (valid as { active: unknown }).active = "yes";
    const result = typia.validate<IBooleanProp>(valid);
    TestEquality.equals("primitive_boolean: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "primitive_boolean: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "primitive_boolean: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "primitive_boolean: contains active path",
        output.includes("$input.active"),
        true,
      );
    }
  };
}

namespace Case_primitive_number {
  interface INumberProp {
    value: number;
  }

  export const run = (): void => {
    const valid: INumberProp = { value: 42 };
    (valid as { value: unknown }).value = "not-a-number";
    const result = typia.validate<INumberProp>(valid);
    TestEquality.equals("primitive_number: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "primitive_number: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "primitive_number: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "primitive_number: contains value path",
        output.includes("$input.value"),
        true,
      );
    }
  };
}

namespace Case_primitive_string {
  interface IStringProp {
    name: string;
  }

  export const run = (): void => {
    const valid: IStringProp = { name: "John" };
    (valid as { name: unknown }).name = 12345;
    const result = typia.validate<IStringProp>(valid);
    TestEquality.equals("primitive_string: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "primitive_string: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "primitive_string: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "primitive_string: contains name path",
        output.includes("$input.name"),
        true,
      );
    }
  };
}

namespace Case_range_constraint {
  interface IRangeProp {
    value: number & tags.Minimum<0> & tags.Maximum<100>;
  }

  export const run = (): void => {
    const valid: IRangeProp = { value: 50 };
    (valid as { value: unknown }).value = 150;
    const result = typia.validate<IRangeProp>(valid);
    TestEquality.equals("range_constraint: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "range_constraint: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "range_constraint: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "range_constraint: contains value path",
        output.includes("$input.value"),
        true,
      );
    }
  };
}

namespace Case_tuple_type {
  interface ITupleType {
    pair: [string, number];
  }

  export const run = (): void => {
    const valid: ITupleType = { pair: ["hello", 42] };
    (valid.pair as unknown[])[1] = "not-a-number";
    const result = typia.validate<ITupleType>(valid);
    TestEquality.equals("tuple_type: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "tuple_type: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "tuple_type: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "tuple_type: contains pair path",
        output.includes("$input.pair"),
        true,
      );
    }
  };
}

namespace Case_undefined_value {
  interface IRequiredField {
    name: string;
    value: number;
  }

  export const run = (): void => {
    const valid: IRequiredField = { name: "test", value: 42 };
    (valid as { value: unknown }).value = undefined;
    const result = typia.validate<IRequiredField>(valid);
    TestEquality.equals("undefined_value: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "undefined_value: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "undefined_value: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "undefined_value: contains value path",
        output.includes("$input.value"),
        true,
      );
    }
  };
}

namespace Case_unicode_property_names {
  interface IKoreanKey {
    이름: number;
  }

  interface IJapaneseKey {
    名前: number;
  }

  interface IUnicodeValue {
    text: string;
  }

  export const run = (): void => {
    // Test case: Property names with unicode characters
    // This tests JSON.stringify behavior for keys and the path generation

    // Test: Korean characters
    const data1: IKoreanKey = { 이름: 123 };
    (data1 as { 이름: unknown }).이름 = "wrong";
    const result1 = typia.validate<IKoreanKey>(data1);
    TestEquality.equals(
      "unicode_property_names: korean-success",
      result1.success,
      false,
    );
    if (!result1.success) {
      const output1: string = LlmJson.stringify(result1);
      TestEquality.equals(
        "unicode_property_names: korean-code-block",
        output1.includes("```json"),
        true,
      );
      TestEquality.equals(
        "unicode_property_names: korean-error-marker",
        output1.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "unicode_property_names: korean-key",
        output1.includes("이름"),
        true,
      );
    }

    // Test: Japanese characters
    const data2: IJapaneseKey = { 名前: 456 };
    (data2 as { 名前: unknown }).名前 = "wrong";
    const result2 = typia.validate<IJapaneseKey>(data2);
    TestEquality.equals(
      "unicode_property_names: japanese-success",
      result2.success,
      false,
    );
    if (!result2.success) {
      const output2: string = LlmJson.stringify(result2);
      TestEquality.equals(
        "unicode_property_names: japanese-code-block",
        output2.includes("```json"),
        true,
      );
      TestEquality.equals(
        "unicode_property_names: japanese-error-marker",
        output2.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "unicode_property_names: japanese-key",
        output2.includes("名前"),
        true,
      );
    }

    // Test: Unicode values with special characters
    const data3: IUnicodeValue = { text: "Hello World" };
    (data3 as { text: unknown }).text = 12345;
    const result3 = typia.validate<IUnicodeValue>(data3);
    TestEquality.equals(
      "unicode_property_names: value-success",
      result3.success,
      false,
    );
    if (!result3.success) {
      const output3: string = LlmJson.stringify(result3);
      TestEquality.equals(
        "unicode_property_names: value-code-block",
        output3.includes("```json"),
        true,
      );
      TestEquality.equals(
        "unicode_property_names: value-error-marker",
        output3.includes("// ❌"),
        true,
      );
    }
  };
}

namespace Case_union_type {
  interface IUnionProp {
    value: string | number;
  }

  export const run = (): void => {
    const valid: IUnionProp = { value: "hello" };
    (valid as { value: unknown }).value = true;
    const result = typia.validate<IUnionProp>(valid);
    TestEquality.equals("union_type: success", result.success, false);
    if (!result.success) {
      const output: string = LlmJson.stringify(result);
      TestEquality.equals(
        "union_type: contains code block",
        output.includes("```json"),
        true,
      );
      TestEquality.equals(
        "union_type: contains error marker",
        output.includes("// ❌"),
        true,
      );
      TestEquality.equals(
        "union_type: contains value path",
        output.includes("$input.value"),
        true,
      );
    }
  };
}

/**
 * Verifies LlmJson.stringify annotates the real failure that typia.validate
 * reports.
 *
 * Each case builds an invalid value, takes the native typia.validate result and
 * renders it with LlmJson.stringify. The native producer defines the error
 * paths ($input.name, $input.scores[1]); the utility must keep them visible
 * inside a fenced JSON block with an error marker. The cases keep their own
 * assertion titles, prefixed with the case name, so a failure identifies its
 * type.
 *
 * 1. Build one invalid value per case and validate it with typia.validate.
 * 2. Render the failure with LlmJson.stringify.
 * 3. Assert the fenced block, the error marker and the authored error path.
 *
 * @evidence contracts/testing.md#behavioral-verification Each case validates an invalid value with the native-transformed typia.validate and renders the real failure with LlmJson.stringify; the fenced block, the error marker and the authored error path must appear, so a changed typia error path format or a dropped annotation fails with the case name in the assertion title.
 * @evidence contracts/testing.md#independent-expectations The error paths ($input.scores[1], $input.name and similar) are literals authored from the typia error path convention and the invalid values are built in the test; the native validator is the producer of the failure and not of the expectation. The assertions are presence checks and do not compare the complete rendered text, which the unit stringify cases do for authored failures.
 * @evidence contracts/testing.md#distinguishing-cases Constraint failures (minimum length, items, range, pattern, format, integer), structural failures (missing, undefined, null, wrong container), nested and multiple errors, unions, tuples and unicode or bracket-notation keys are separate namespaces with their own titles; valid values without errors are owned by the unit no-errors case.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.validate is rewritten by the native transform, so the real producer-to-utility connection is this suite's boundary; the rendering rules themselves run in the plugin-free unit population.
 */
export const test_llm_stringify_native_validation_failures = (): void => {
  Case_array_element.run();
  Case_array_expected_object.run();
  Case_array_of_objects.run();
  Case_bracket_notation_keys.run();
  Case_complex_object.run();
  Case_empty_array.run();
  Case_empty_object.run();
  Case_format_email.run();
  Case_format_output.run();
  Case_format_url.run();
  Case_integer_constraint.run();
  Case_literal_type.run();
  Case_min_items.run();
  Case_min_length.run();
  Case_mixed_nested_errors.run();
  Case_multiple_array_errors.run();
  Case_multiple_errors.run();
  Case_nested_array.run();
  Case_nested_constraint.run();
  Case_nested_object.run();
  Case_null_value.run();
  Case_object_expected_array.run();
  Case_object_instead_of_primitive.run();
  Case_object_with_array.run();
  Case_optional_missing.run();
  Case_pattern_constraint.run();
  Case_primitive_boolean.run();
  Case_primitive_number.run();
  Case_primitive_string.run();
  Case_range_constraint.run();
  Case_tuple_type.run();
  Case_undefined_value.run();
  Case_unicode_property_names.run();
  Case_union_type.run();
};
