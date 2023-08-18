//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TagType {
//     repeated TagType.Type value = 1;
//     message Type {
//         required int32 int = 1;
//         required uint32 uint = 2;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagType$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function Type$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).int32(m.int)
  w.uint32(16).uint32(m.uint)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagType$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.value&&m.value.length))
  m.value=[]
  m.value.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Type$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.int=r.int32()
  break
  }
  case 2: {
  m.uint=r.uint32()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("int"))
  throw util.ProtocolError("missing required 'int'",{instance:m})
  if(!m.hasOwnProperty("uint"))
  throw util.ProtocolError("missing required 'uint'",{instance:m})
  return m
}