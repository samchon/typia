/**
 * Arithmetic controller fixture for reflected tools and SDK mock calls.
 *
 * Numeric operands and object results keep dispatch observable; divide throws
 * at a zero denominator so both direct and SDK execution can test feedback.
 *
 * @evidence contracts/testing.md#behavioral-verification This fixture owns no assertions; class_controller_execute checks all four arithmetic results, class_controller_validation checks malformed operands, and class_controller_error_handling checks divide's exception.
 * @evidence contracts/testing.md#independent-expectations Authored operands and arithmetic literals in those cases supply expected values; IProps and IResult define the input/output oracle independently of native schema generation.
 * @evidence contracts/testing.md#distinguishing-cases Four operations and the zero-denominator branch supply distinct dispatch inputs; SDK generate_text cases additionally consume successful, invalid-argument and thrown-result paths.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor's class and generate_text cases create this fixture and reflect it through typia.llm.controller. The methods and merged type namespace support those cases rather than register independent tests.
 */
export class Calculator {
  /**
   * Add two numbers.
   *
   * @param p The input containing two numbers to add
   *
   * @returns The sum of x and y
   *
   * @evidence contracts/testing.md#behavioral-verification Fixture method returns x+y; class_controller_execute and generate_text_with_tool_call assert its full 10+5 success wrapper.
   * @evidence contracts/testing.md#independent-expectations Arithmetic literals15 and the authored operands establish expected data independently of generated validation.
   * @evidence contracts/testing.md#distinguishing-cases Valid numeric dispatch is paired with class_controller_validation's noncoercible x and SDK validation-error feedback.
   * @evidence contracts/testing.md#execution-ownership Native class controllers and injected SDK tool calls execute this fixture; registered test functions own assertions, not add itself.
   */
  add(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x + p.y };
  }

  /**
   * Subtract two numbers.
   *
   * @param p The input containing two numbers to subtract
   *
   * @returns The difference of x and y
   *
   * @evidence contracts/testing.md#behavioral-verification Fixture method returns x-y; class_controller_execute asserts 10-3=7 and generate_text_multiple_tools asserts100-42=58 by call ID.
   * @evidence contracts/testing.md#independent-expectations Literal arithmetic operands/results establish the dispatch oracle independently of native schemas.
   * @evidence contracts/testing.md#distinguishing-cases Subtraction differs from add and multiply; the multiple-call case tests routing among those separate methods.
   * @evidence contracts/testing.md#execution-ownership Integration cases reflect and invoke subtract directly or through real SDK mock-model orchestration; this fixture owns no assertions.
   */
  subtract(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x - p.y };
  }

  /**
   * Multiply two numbers.
   *
   * @param p The input containing two numbers to multiply
   *
   * @returns The product of x and y
   *
   * @evidence contracts/testing.md#behavioral-verification Fixture method returns x*y; class_controller_execute asserts4*7=28 and generate_text_multiple_tools asserts3*7=21.
   * @evidence contracts/testing.md#independent-expectations Handwritten arithmetic literals are independent of generated schema/validator output.
   * @evidence contracts/testing.md#distinguishing-cases Multiplication's distinct operands/results detect incorrect method routing beside addition and subtraction.
   * @evidence contracts/testing.md#execution-ownership Registered integration cases reflect and execute multiply; SDK call-ID association is asserted by generate_text_multiple_tools.
   */
  multiply(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x * p.y };
  }

  /**
   * Divide two numbers.
   *
   * @param p The input containing two numbers to divide
   *
   * @returns The quotient of x and y
   *
   * @evidence contracts/testing.md#behavioral-verification Fixture method returns x/y or throws for y=0; direct and SDK cases assert5 for20/4 and Division by zero failure text for10/0.
   * @evidence contracts/testing.md#independent-expectations The explicit zero check and authored exception message establish the negative oracle; ordinary arithmetic establishes the valid result.
   * @evidence contracts/testing.md#distinguishing-cases Nonzero and zero denominators distinguish normal output from controller runtime exception after valid argument validation.
   * @evidence contracts/testing.md#execution-ownership class_controller_execute/error_handling and generate_text_runtime_error own those assertions and execute this support method.
   */
  divide(p: Calculator.IProps): Calculator.IResult {
    if (p.y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return { value: p.x / p.y };
  }
}
export namespace Calculator {
  /**
   * Numeric operands for the four arithmetic fixture methods.
   *
   * @evidence contracts/testing.md#behavioral-verification This type declares fixture inputs; execute cases assert arithmetic and validation cases reject nonnumeric x. It performs no assertions itself.
   * @evidence contracts/testing.md#independent-expectations Required x/y numbers are the authored oracle against which generated argument metadata and runtime verdicts are checked.
   * @evidence contracts/testing.md#distinguishing-cases Valid number operands and a noncoercible string distinguish dispatch from validation failure; y=0 remains structurally valid and triggers divide's own error.
   * @evidence contracts/testing.md#execution-ownership Native controller reflection consumes IProps through Calculator methods; registered direct and SDK integration cases own validation assertions.
   */
  export interface IProps {
    /** First operand */
    x: number;

    /** Second operand */
    y: number;
  }

  /**
   * Result of a calculation.
   *
   * @evidence contracts/testing.md#behavioral-verification This type fixes the value:number result shape; arithmetic cases compare the complete success/data wrapper to handwritten values.
   * @evidence contracts/testing.md#independent-expectations The numeric value property is declared input to native reflection, not copied from its emitted schema.
   * @evidence contracts/testing.md#distinguishing-cases Successful arithmetic carries data.value; division errors carry error instead and separate malformed-output fixtures test rejection.
   * @evidence contracts/testing.md#execution-ownership Calculator reflection and registered direct/SDK integration cases consume this result type; it owns no separate test entry.
   */
  export interface IResult {
    /** Calculated value */
    value: number;
  }
}
