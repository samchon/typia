/**
 * Arithmetic controller fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification Class-controller cases reflect these four methods, assert dispatch results and listing metadata, and exercise divide's exception through the adapter.
 * @evidence contracts/testing.md#independent-expectations Authored operands, arithmetic and division-by-zero message define the fixture oracle independently of generated schemas.
 * @evidence contracts/testing.md#distinguishing-cases Successful arithmetic, string coercion, invalid operands, unknown tool names and zero division are owned by their named class-controller cases.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor runs the importing test_mcp_class_controller cases in test:integration; this fixture is not a separate case.
 */
export class Calculator {
  /**
   * Add two numbers.
   *
   * @param p The input containing two numbers to add
   *
   * @returns The sum of x and y
   *
   * @evidence contracts/testing.md#behavioral-verification class_controller_execute asserts add(10,5) returns value 15; coercion asserts string operands produce 7 and tool_list checks its reflected metadata.
   * @evidence contracts/testing.md#independent-expectations Ordinary addition and the authored method description define expected value and discovery prose.
   * @evidence contracts/testing.md#distinguishing-cases Valid addition and numeric-string coercion complement class_controller_validation's nonnumeric operand rejection.
   * @evidence contracts/testing.md#execution-ownership The integration cases invoke this fixture through a native-reflected controller and actual registered SDK handler.
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
   * @evidence contracts/testing.md#behavioral-verification class_controller_execute asserts subtract(10,3) returns structured value 7 and tool_list includes subtract.
   * @evidence contracts/testing.md#independent-expectations Subtraction of the authored operands establishes 7 independently of controller generation.
   * @evidence contracts/testing.md#distinguishing-cases This distinct method name and operation distinguish subtraction dispatch from add, multiply and divide; invalid numeric input is covered by the shared argument-validation case.
   * @evidence contracts/testing.md#execution-ownership DynamicExecutor's integration execute and list cases consume this reflected fixture method.
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
   * @evidence contracts/testing.md#behavioral-verification class_controller_execute asserts multiply(4,7) returns structured value 28 and tool_list includes multiply.
   * @evidence contracts/testing.md#independent-expectations Multiplication of the authored operands establishes 28 independently of emitted schemas.
   * @evidence contracts/testing.md#distinguishing-cases This multiplication result distinguishes its dispatch from the sibling arithmetic methods; input rejection belongs to the shared validation case.
   * @evidence contracts/testing.md#execution-ownership DynamicExecutor's integration execute and list cases consume this reflected fixture method.
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
   * @evidence contracts/testing.md#behavioral-verification class_controller_execute asserts divide(20,4) returns 5; class_controller_error_handling invokes y=0 and checks the in-band error message.
   * @evidence contracts/testing.md#independent-expectations Authored division and the explicit zero-divisor exception establish expected success and failure.
   * @evidence contracts/testing.md#distinguishing-cases Nonzero division and zero-divisor throw are separate fixture branches exercised by their respective cases.
   * @evidence contracts/testing.md#execution-ownership Integration execute and error-handling exports invoke this native-reflected method through the adapter handler.
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
   * Two arithmetic operands reflected into tool arguments.
   *
   * @evidence contracts/testing.md#behavioral-verification tool_list checks required x/y; execute, coercion and validation consume this shape through the adapter.
   * @evidence contracts/testing.md#independent-expectations Authored required number properties establish the schema and numeric input contract.
   * @evidence contracts/testing.md#distinguishing-cases Valid numbers, coercible strings and nonnumeric values are separate importing cases; omitted arguments are exercised with the parameterless Greeter fixture.
   * @evidence contracts/testing.md#execution-ownership The integration runner discovers the importing cases; this type owns fixture input rather than independent assertions.
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
   * @evidence contracts/testing.md#behavioral-verification class_controller_execute checks authored arithmetic structured values; output_schema checks reflected value-property presence.
   * @evidence contracts/testing.md#independent-expectations The required value number and ordinary arithmetic supply fixture expectations independently of generated output metadata.
   * @evidence contracts/testing.md#distinguishing-cases Four successful arithmetic values share this shape; exception and invalid-argument cases check tool-error flags and text instead.
   * @evidence contracts/testing.md#execution-ownership Integration feature exports consume this reflected return type; the interface is not a registered test.
   */
  export interface IResult {
    /** Calculated value */
    value: number;
  }
}
