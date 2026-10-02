/**
 * Arithmetic receiver used by native controller and LangChain tool cases.
 *
 * @evidence contracts/testing.md#behavioral-verification The execute case invokes all four methods through reflected SDK tools; error_handling invokes divide with zero and checks its returned failure.
 * @evidence contracts/testing.md#independent-expectations Ordinary arithmetic and the authored division-by-zero message define the fixture results independently of reflection and tool registration.
 * @evidence contracts/testing.md#distinguishing-cases Execute owns four successful operations; coercion, validation, description, schema and error siblings supply distinct input and metadata checks.
 * @evidence contracts/testing.md#execution-ownership This fixture is not discovered as a case; native integration exports instantiate it and DynamicExecutor invokes those exports within one project/process.
 */
export class Calculator {
  /**
   * Add two numbers.
   *
   * @param p The input containing two numbers to add
   *
   * @returns The sum of a and b
   *
   * @evidence contracts/testing.md#behavioral-verification The execute case invokes this method via add and compares the success value with 15; coercion compares the coerced result with 47.
   * @evidence contracts/testing.md#independent-expectations The literal sums follow addition of authored operands rather than generated controller metadata.
   * @evidence contracts/testing.md#distinguishing-cases Numeric operands and numeric-string coercion contrast with the validation sibling's nonnumeric rejection before this method.
   * @evidence contracts/testing.md#execution-ownership This fixture method runs through tools in the native integration population; it is not an independently registered test.
   */
  add(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x + p.y };
  }

  /**
   * Subtract two numbers.
   *
   * @param p The input containing two numbers to subtract
   *
   * @returns The difference of a and b
   *
   * @evidence contracts/testing.md#behavioral-verification The execute case invokes subtract through the SDK and asserts value 7 from operands 10 and 3.
   * @evidence contracts/testing.md#independent-expectations The literal result follows ordinary subtraction independently of emitted metadata.
   * @evidence contracts/testing.md#distinguishing-cases Subtract supplies a separate dispatch identity from add, multiply and divide; shared invalid-input behavior is owned by validation.
   * @evidence contracts/testing.md#execution-ownership This fixture method is executed by test_langchain_class_controller_execute through the native integration runner.
   */
  subtract(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x - p.y };
  }

  /**
   * Multiply two numbers.
   *
   * @param p The input containing two numbers to multiply
   *
   * @returns The product of a and b
   *
   * @evidence contracts/testing.md#behavioral-verification The execute case invokes multiply through the SDK and asserts value 28 from operands 4 and 7.
   * @evidence contracts/testing.md#independent-expectations The authored literal result follows multiplication independently of reflection.
   * @evidence contracts/testing.md#distinguishing-cases Multiply identifies its own method dispatch among the four arithmetic tools; shared invalid-input behavior is owned by validation.
   * @evidence contracts/testing.md#execution-ownership The native integration execute entry owns this method's invocation and assertions.
   */
  multiply(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x * p.y };
  }

  /**
   * Divide two numbers.
   *
   * @param p The input containing two numbers to divide
   *
   * @returns The quotient of a and b
   *
   * @evidence contracts/testing.md#behavioral-verification Execute asserts 20/4 returns 5; error_handling invokes 10/0 and checks the fixture's division-by-zero failure text.
   * @evidence contracts/testing.md#independent-expectations Arithmetic and the explicitly authored zero-divisor rejection define the two expectations independently of the adapter.
   * @evidence contracts/testing.md#distinguishing-cases A nonzero divisor succeeds and zero reaches the fixture's thrown-error branch; invalid arguments are rejected before dispatch by validation.
   * @evidence contracts/testing.md#execution-ownership The execute and error_handling native integration entries own this fixture method's assertions.
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
   * Required numeric operands used by every arithmetic method.
   *
   * @evidence contracts/testing.md#behavioral-verification Execute, coercion and validation cases use this reflected argument contract through real SDK invocation.
   * @evidence contracts/testing.md#independent-expectations Authored required number fields supply the input expectations; literal arithmetic and invalid-text reports are asserted by consumers.
   * @evidence contracts/testing.md#distinguishing-cases Consumers contrast numbers, coercible numeric strings and nonnumeric text; no extreme numeric precision claim is made.
   * @evidence contracts/testing.md#execution-ownership This type is fixture input to the native controller producer; the exported integration cases own runtime assertions.
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
   * @evidence contracts/testing.md#behavioral-verification Execute compares SDK success envelopes carrying numeric value against authored arithmetic results.
   * @evidence contracts/testing.md#independent-expectations The declared value number and literal sums, difference, product and quotient are independent of generated output metadata.
   * @evidence contracts/testing.md#distinguishing-cases Successful arithmetic contrasts with divide's thrown failure in error_handling; the local BrokenOutput fixture owns undefined declared-output rejection.
   * @evidence contracts/testing.md#execution-ownership This fixture return type is reflected during integration compilation; its consumers own executed assertions.
   */
  export interface IResult {
    /** Calculated value */
    value: number;
  }
}
