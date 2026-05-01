import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_spec_array = (): void => {
  TestValidator.equals(
    "array of string",
    clean(typia.llm.schema<string[]>({})),
    {
      type: "array",
      items: {
        type: "string",
      },
    },
  );
  TestValidator.equals(
    "array bounds",
    clean(
      typia.llm.schema<
        string[] & tags.MinItems<1> & tags.MaxItems<3> & tags.UniqueItems
      >({}),
    ),
    {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
      maxItems: 3,
      uniqueItems: true,
    },
  );
  TestValidator.equals(
    "array item union",
    clean(typia.llm.schema<Array<string | number>>({})),
    {
      type: "array",
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
    },
  );
};

export const test_llm_schema_spec_object = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IObjectSpec>($defs);
  TestValidator.equals("object top ref", clean(schema), {
    $ref: "#/$defs/IObjectSpec",
  });
  TestValidator.equals("object definition", clean($defs.IObjectSpec), {
    type: "object",
    properties: {
      nullable: {
        anyOf: [
          {
            type: "null",
          },
          {
            type: "boolean",
          },
        ],
      },
      optional: {
        type: "number",
      },
      required: {
        type: "string",
      },
    },
    required: ["required", "nullable"],
    additionalProperties: false,
  });
};

export const test_llm_schema_spec_record = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema =
    typia.llm.schema<Record<string, string & tags.MinLength<1>>>($defs);
  const key = Object.keys($defs)[0]!;

  TestValidator.equals("record top ref", clean(schema), {
    $ref: `#/$defs/${key}`,
  });
  TestValidator.equals("record string value", clean($defs[key]), {
    type: "object",
    properties: {},
    additionalProperties: {
      type: "string",
      minLength: 1,
    },
    required: [],
  });
};

export const test_llm_schema_spec_reference = (): void => {
  interface INode {
    value: string;
    next?: INode;
    children: INode[];
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<INode>($defs);
  TestValidator.equals("recursive top ref", clean(schema), {
    $ref: "#/$defs/INode",
  });
  TestValidator.equals("recursive definition", clean($defs.INode), {
    type: "object",
    properties: {
      children: {
        type: "array",
        items: {
          $ref: "#/$defs/INode",
        },
      },
      next: {
        $ref: "#/$defs/INode",
      },
      value: {
        type: "string",
      },
    },
    required: ["value", "children"],
    additionalProperties: false,
  });
};

export const test_llm_schema_spec_union = (): void => {
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type IAnimal = ICat | IDog;

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IAnimal>($defs);
  TestValidator.equals("union top ref", clean(schema), {
    $ref: "#/$defs/IAnimal",
  });
  TestValidator.equals("union discriminator", clean($defs.IAnimal), {
    anyOf: [
      {
        $ref: "#/$defs/ICat",
      },
      {
        $ref: "#/$defs/IDog",
      },
    ],
    "x-discriminator": {
      propertyName: "type",
      mapping: {
        cat: "#/$defs/ICat",
        dog: "#/$defs/IDog",
      },
    },
  });
  TestValidator.equals("cat literal property", clean($defs.ICat), {
    type: "object",
    properties: {
      meow: {
        type: "boolean",
      },
      name: {
        type: "string",
      },
      type: {
        type: "string",
        enum: ["cat"],
      },
    },
    required: ["type", "name", "meow"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
