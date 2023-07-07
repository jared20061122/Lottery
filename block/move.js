Blockly.defineBlocksWithJsonArray([{
  'type':'move_to',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'x座標を %1 、y座標を %2 にする',
  'args0':[{
    'type':'field_number',
    'name':'X',
    'value':0,
  },{
    'type':'field_number',
    'name':'Y',
  }]
},{
  'type':'move_prepare',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'動かすための準備'
}]);

Blockly.JavaScript['move_to']=function(block){
  const X=block.getFieldValue('X');
  const Y=block.getFieldValue('Y');
  const code='moveTo('+X+','+Y+');';
  return code;
};
Blockly.JavaScript['move_prepare']=function(block){
  return 'function moveTo(x,y){const img=document.getElementById("img");img.style.position="absolute";img.style.top=x+"px";img.style.left=y+"px";}'
}