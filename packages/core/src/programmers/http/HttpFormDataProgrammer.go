package http

var HttpFormDataProgrammer = httpFormDataProgrammerNamespace{}

type httpFormDataProgrammerNamespace struct{}

func (httpFormDataProgrammerNamespace) Write(typeText string) string {
	return httpDecodeFormDataFunction()
}
