//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message DynamicSimple {
//     map<string, double> value = 1;
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function DynamicSimple$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&Object.hasOwnProperty.call(m,"value")){
  for(var ks=Object.keys(m.value),i=0;i<ks.length;++i){
  w.uint32(10).fork().uint32(10).string(ks[i])
  .uint32(17).double(m.value[ks[i]]).ldelim()
  }
  }
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function DynamicSimple$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor,k,value
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(m.value===util.emptyObject)
  m.value={}
  var c2 = r.uint32()+r.pos
  k=""
  value=0
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.double()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.value[k]=value
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}