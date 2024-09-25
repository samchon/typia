import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_llm_application = (): void => {
  const app: ILlmApplication = typia.llm.application<SomeClass>();
  TestValidator.equals("application")(app)({
    functions: [
      {
        name: "getId",
        parameters: [],
        output: {
          type: "string",
        },
        description: "Get ID.",
        deprecated: true,
      },
      {
        name: "getValue",
        parameters: [
          {
            type: "number",
            description: "The value x",
          },
          {
            type: "number",
            title: "The value y",
            description: "The value y.\n\nThe value to be added.",
          },
        ],
        output: {
          type: "number",
          title: "Sum of them",
          description: "Sum of them.\n\n`this.value + x + y`",
        },
        description:
          "Get value.\n\nGet value with plus operation of member value, x and y.",
        tags: ["mathmatics", "arithmetic"],
      },
      {
        name: "getPerformance",
        parameters: [],
        output: {
          type: "object",
          properties: {
            level: {
              type: "number",
              title: "Level value",
              description: "Level value.",
            },
          },
          nullable: false,
          required: ["level"],
          description: "The performance interface.",
        },
        description: "Get performance.",
        tags: ["monitor"],
      },
      {
        name: "synchronize",
        parameters: [
          {
            type: "boolean",
            title: "Flag for synchronization",
            description: "Flag for synchronization.",
          },
        ],
        output: {
          type: "boolean",
        },
        description: "Synchornize with server.",
      },
    ],
    options: {
      separate: null,
    },
  });
};

class SomeClass {
  id: string = "id";
  value: number = 0;

  /**
   * Get ID.
   *
   * @deprecated
   */
  getId = (): string => {
    return this.id;
  };

  /**
   * Get value.
   *
   * Get value with plus operation of member value, x and y.
   *
   * @param x The value x
   * @param y The value y.
   *
   *          The value to be added.
   * @returns Sum of them.
   *
   *          `this.value + x + y`
   * @tag mathmatics
   * @tag arithmetic
   */
  getValue(x: number, y: number): number {
    return this.value + x + y;
  }

  /**
   * Get performance.
   *
   * @tag monitor tool
   */
  async getPerformance(): Promise<IPerformance> {
    return { level: 3 };
  }

  /**
   * Synchornize with server.
   */
  async synchronize(
    /**
     * Flag for synchronization.
     */
    flag: boolean,
  ): Promise<boolean> {
    return flag && true;
  }
}

/**
 * The performance interface.
 */
interface IPerformance {
  /**
   * Level value.
   */
  level: number;
}
