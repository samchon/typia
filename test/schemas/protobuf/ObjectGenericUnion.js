//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectGenericUnion$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.v1!=null&&Object.hasOwnProperty.call(m,"v1"))
  types[0].encode(m.v1,w.uint32(10).fork()).ldelim()
  if(m.v2!=null&&Object.hasOwnProperty.call(m,"v2"))
  types[1].encode(m.v2,w.uint32(18).fork()).ldelim()
  return w
}
function Omit_lt_ObjectGenericUnion$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectGenericUnion$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.v1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.v2=types[1].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Omit_lt_ObjectGenericUnion$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}