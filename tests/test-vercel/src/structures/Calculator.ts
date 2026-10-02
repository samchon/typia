/**
 * Arithmetic controller fixture for reflected tools and SDK mock calls.
 *
 * Numeric operands and object results keep dispatch observable; divide throws
 * at a zero denominator so both direct and SDK execution can test feedback.
 *
 */
export class Calculator {
  /**
   * Add two numbers.
   *
   * @param p The input containing two numbers to add
   *
   * @returns The sum of x and y
   *
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
   */
  export interface IResult {
    /** Calculated value */
    value: number;
  }
}
