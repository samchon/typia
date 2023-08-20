//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function __object$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.age=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("age"))
  throw util.ProtocolError("missing required 'age'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function __object$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.name)
  w.uint32(25).double(m.age)
  return w
}