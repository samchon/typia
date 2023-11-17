import typia from "typia";

interface OneOfA_Expr {
  A_Expr: A_Expr;
}

interface OneOfFuncCall {
  FuncCall: FuncCall;
}

interface FuncCall {
  args?: Array<OneOfA_Expr | OneOfFuncCall | OneOfA_Const>;
  agg_filter?: OneOfA_Expr | OneOfFuncCall;
  agg_within_group?: boolean;
  agg_star?: boolean;
  agg_distinct?: boolean;
  func_variadic?: boolean;
  location: number;
}

interface OneOfA_Const {
  A_Const: A_Const;
}

interface OneOfString {
  String: {
    str: string;
  };
}

interface A_Const {
  val: OneOfString;
  location: number;
}

interface A_Expr {
  lexpr?: OneOfA_Expr | OneOfFuncCall | OneOfA_Const;
  rexpr?: OneOfA_Expr | OneOfFuncCall | OneOfA_Const;
  location: number;
}

const value: A_Expr = {
  location: 1,
  lexpr: {
    A_Const: {
      val: {
        String: {
          str: "advisory",
        },
      },
      location: 4085,
    },
  },
};
console.log(typia.validateEquals(value));
