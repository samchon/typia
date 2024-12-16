import typia from "typia";

interface IHierarchical {
  children: IHierarchical[];
}
interface IReference {
  parent: IReference | null;
}

// SCHEMA
typia.llm.schema<
  IHierarchical,
  "gemini",
  {
    recursive: false;
  }
>();
typia.llm.schema<
  IReference,
  "gemini",
  {
    recursive: false;
  }
>();
typia.llm.schema<
  IHierarchical,
  "gemini",
  {
    recursive: 0;
  }
>();
typia.llm.schema<
  IReference,
  "gemini",
  {
    recursive: 0;
  }
>();

// PARAMETERS
typia.llm.parameters<
  {
    x: IHierarchical;
  },
  "gemini",
  {
    recursive: false;
  }
>();
typia.llm.parameters<
  {
    x: IReference;
  },
  "gemini",
  {
    recursive: false;
  }
>();
typia.llm.parameters<
  {
    x: IHierarchical;
  },
  "gemini",
  {
    recursive: 0;
  }
>();
typia.llm.parameters<
  {
    x: IReference;
  },
  "gemini",
  {
    recursive: 0;
  }
>();

// APPLICATION
typia.llm.application<
  {
    insert(props: { x: IHierarchical }): void;
  },
  "gemini",
  {
    recursive: false;
  }
>();
typia.llm.application<
  {
    insert(props: { x: IReference }): void;
  },
  "gemini",
  {
    recursive: false;
  }
>();
typia.llm.application<
  {
    insert(props: { x: IHierarchical }): void;
  },
  "gemini",
  {
    recursive: 0;
  }
>();
typia.llm.application<
  {
    insert(props: { x: IReference }): void;
  },
  "gemini",
  {
    recursive: 0;
  }
>();
