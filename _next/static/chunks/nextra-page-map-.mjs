import meta from "../../../pages/_meta.js";
import docs_meta from "../../../pages/docs/_meta.js";
import docs_json_meta from "../../../pages/docs/json/_meta.js";
import docs_llm_meta from "../../../pages/docs/llm/_meta.js";
import docs_protobuf_meta from "../../../pages/docs/protobuf/_meta.js";
import docs_utilization_meta from "../../../pages/docs/utilization/_meta.js";
import docs_validators_meta from "../../../pages/docs/validators/_meta.js";
import playground_meta from "../../../pages/playground/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "index",
    route: "/docs",
    frontMatter: {
      "title": "Guide Documents > Introduction"
    }
  }, {
    name: "json",
    route: "/docs/json",
    children: [{
      data: docs_json_meta
    }, {
      name: "parse",
      route: "/docs/json/parse",
      frontMatter: {
        "title": "Guide Documents > JSON < parse() functions"
      }
    }, {
      name: "schema",
      route: "/docs/json/schema",
      frontMatter: {
        "title": "Guide Documents > JSON > Schema"
      }
    }, {
      name: "stringify",
      route: "/docs/json/stringify",
      frontMatter: {
        "title": "Guide Documents > JSON > stringify() function"
      }
    }]
  }, {
    name: "llm",
    route: "/docs/llm",
    children: [{
      data: docs_llm_meta
    }, {
      name: "application",
      route: "/docs/llm/application",
      frontMatter: {
        "title": "Guide Documents > Large Language Model > application() function"
      }
    }, {
      name: "chat",
      route: "/docs/llm/chat",
      frontMatter: {
        "title": "Guide Documents > Large Language Model > A.I. Chatbot"
      }
    }, {
      name: "parameters",
      route: "/docs/llm/parameters",
      frontMatter: {
        "title": "Guide Documents > Large Language Model > parameters() function"
      }
    }, {
      name: "schema",
      route: "/docs/llm/schema",
      frontMatter: {
        "title": "Guide Documents > Large Language Model > schema() function"
      }
    }, {
      name: "strategy",
      route: "/docs/llm/strategy",
      frontMatter: {
        "title": "Guide Documents > Large Language Model > Documentation Strategy"
      }
    }]
  }, {
    name: "misc",
    route: "/docs/misc",
    frontMatter: {
      "title": "Guide Documents > Miscellaneous"
    }
  }, {
    name: "protobuf",
    route: "/docs/protobuf",
    children: [{
      data: docs_protobuf_meta
    }, {
      name: "decode",
      route: "/docs/protobuf/decode",
      frontMatter: {
        "title": "Guide Documents > Protobuf > decode() functions"
      }
    }, {
      name: "encode",
      route: "/docs/protobuf/encode",
      frontMatter: {
        "title": "Guide Documents > Protobuf > encode() functions"
      }
    }, {
      name: "message",
      route: "/docs/protobuf/message",
      frontMatter: {
        "title": "Guide Documents > Protobuf > Schema"
      }
    }]
  }, {
    name: "pure",
    route: "/docs/pure",
    frontMatter: {
      "title": "Guide Documents > Pure TypeScript Type"
    }
  }, {
    name: "random",
    route: "/docs/random",
    frontMatter: {
      "title": "Guide Documents > random() function"
    }
  }, {
    name: "setup",
    route: "/docs/setup",
    frontMatter: {
      "title": "Guide Documents > Setup"
    }
  }, {
    name: "utilization",
    route: "/docs/utilization",
    children: [{
      data: docs_utilization_meta
    }, {
      name: "hono",
      route: "/docs/utilization/hono",
      frontMatter: {
        "title": "Guide Documents > Utilization Cases > Hono"
      }
    }, {
      name: "nestjs",
      route: "/docs/utilization/nestjs",
      frontMatter: {
        "title": "Guide Documents > Utilization Cases > NestJS"
      }
    }, {
      name: "prisma",
      route: "/docs/utilization/prisma",
      frontMatter: {
        "title": "Guide Documents > Utilization Cases > Prisma"
      }
    }, {
      name: "trpc",
      route: "/docs/utilization/trpc",
      frontMatter: {
        "title": "Guide Documents > Utilization Cases > tRPC"
      }
    }]
  }, {
    name: "validators",
    route: "/docs/validators",
    children: [{
      data: docs_validators_meta
    }, {
      name: "assert",
      route: "/docs/validators/assert",
      frontMatter: {
        "title": "Guide Documents > Runtime Validators > assert() functions"
      }
    }, {
      name: "functional",
      route: "/docs/validators/functional",
      frontMatter: {
        "title": "Guide Documents > Runtime Validators > Functional Module"
      }
    }, {
      name: "is",
      route: "/docs/validators/is",
      frontMatter: {
        "title": "Guide Documents > Runtime Validators > is() functions"
      }
    }, {
      name: "tags",
      route: "/docs/validators/tags",
      frontMatter: {
        "title": "Guide Documents > Runtime Validators > Special Tags"
      }
    }, {
      name: "validate",
      route: "/docs/validators/validate",
      frontMatter: {
        "title": "Guide Documents > Runtime Validators > validate() functions"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Home"
  }
}, {
  name: "playground",
  route: "/playground",
  children: [{
    data: playground_meta
  }, {
    name: "index",
    route: "/playground",
    frontMatter: {
      "title": "Playground"
    }
  }]
}];