package http

var HttpQueryProgrammer = httpQueryProgrammerNamespace{}

type httpQueryProgrammerNamespace struct{}

func (httpQueryProgrammerNamespace) Write(typeText string) string {
	return httpDecodeQueryFunction()
}
