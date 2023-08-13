//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function DynamicConstant$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.value,w.uint32(10).fork()).ldelim()
  return w
}
function __type$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.a)
  w.uint32(17).double(m.b)
  w.uint32(25).double(m.c)
  w.uint32(33).double(m.d)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function DynamicConstant$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=types[0].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("value"))
  throw util.ProtocolError("missing required 'value'",{instance:m})
  return m
}
function __type$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.a=r.double()
  break
  }
  case 2: {
  m.b=r.double()
  break
  }
  case 3: {
  m.c=r.double()
  break
  }
  case 4: {
  m.d=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("a"))
  throw util.ProtocolError("missing required 'a'",{instance:m})
  if(!m.hasOwnProperty("b"))
  throw util.ProtocolError("missing required 'b'",{instance:m})
  if(!m.hasOwnProperty("c"))
  throw util.ProtocolError("missing required 'c'",{instance:m})
  if(!m.hasOwnProperty("d"))
  throw util.ProtocolError("missing required 'd'",{instance:m})
  return m
}