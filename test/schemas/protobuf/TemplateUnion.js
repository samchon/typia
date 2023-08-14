//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TemplateUnion {
//     repeated TemplateUnion.Type value = 1;
//     message Type {
//         required string prefix = 1;
//         required string postfix = 2;
//         required string middle = 3;
//         oneof mixed {
//             bool v4 = 4;
//             double v5 = 5;
//             string v6 = 6;
//             __type v7 = 7;
//         }
//     }
// }
// 
// message __type {
//     required string name = 1;
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TemplateUnion$encode(m,w){
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
  w.uint32(10).string(m.prefix)
  w.uint32(18).string(m.postfix)
  w.uint32(26).string(m.middle)
  if(m.v4!=null&&Object.hasOwnProperty.call(m,"v4"))
  w.uint32(32).bool(m.v4)
  if(m.v5!=null&&Object.hasOwnProperty.call(m,"v5"))
  w.uint32(41).double(m.v5)
  if(m.v6!=null&&Object.hasOwnProperty.call(m,"v6"))
  w.uint32(50).string(m.v6)
  if(m.v7!=null&&Object.hasOwnProperty.call(m,"v7"))
  types[6].encode(m.v7,w.uint32(58).fork()).ldelim()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TemplateUnion$decode(r,l){
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
  m.prefix=r.string()
  break
  }
  case 2: {
  m.postfix=r.string()
  break
  }
  case 3: {
  m.middle=r.string()
  break
  }
  case 4: {
  m.v4=r.bool()
  break
  }
  case 5: {
  m.v5=r.double()
  break
  }
  case 6: {
  m.v6=r.string()
  break
  }
  case 7: {
  m.v7=types[6].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("prefix"))
  throw util.ProtocolError("missing required 'prefix'",{instance:m})
  if(!m.hasOwnProperty("postfix"))
  throw util.ProtocolError("missing required 'postfix'",{instance:m})
  if(!m.hasOwnProperty("middle"))
  throw util.ProtocolError("missing required 'middle'",{instance:m})
  return m
}