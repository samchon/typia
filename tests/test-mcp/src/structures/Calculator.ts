export class Calculator {
  /**
   * Add two numbers.
   *
   * @param p The input containing two numbers to add
   * @returns The sum of a and b
   */
  add(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x + p.y };
  }

  /**
   * Subtract two numbers.
   *
   * @param p The input containing two numbers to subtract
   * @returns The difference of a and b
   */
  subtract(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x - p.y };
  }

  /**
   * Multiply two numbers.
   *
   * @param p The input containing two numbers to multiply
   * @returns The product of a and b
   */
  multiply(p: Calculator.IProps): Calculator.IResult {
    return { value: p.x * p.y };
  }

  /**
   * Divide two numbers.
   *
   * @param p The input containing two numbers to divide
   * @returns The quotient of a and b
   */
  divide(p: Calculator.IProps): Calculator.IResult {
    if (p.y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return { value: p.x / p.y };
  }
}
export namespace Calculator {
  export interface IProps {
    /** First operand */
    x: number;

    /** Second operand */
    y: number;
  }

  /** Result of a calculation. */
  export interface IResult {
    /** Calculated value */
    value: number;
  }
}
