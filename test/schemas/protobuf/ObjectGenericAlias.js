//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectGenericAlias {
//     message Alias {
//         required string value = 1;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectGenericAlias$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Alias$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.value)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectGenericAlias$decode(r,l){
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
function Alias$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=r.string()
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