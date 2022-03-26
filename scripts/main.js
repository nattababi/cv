
function helperSetNone( arrNames ){
  for (let i = 0; i<arrNames.length; ++i){
      const elem = document.getElementById( arrNames[i] );
      elem.style.display = "none";
  }
}

function helperSetBlock( arrNames ){
  for (let i = 0; i<arrNames.length; ++i){
      const elem = document.getElementById( arrNames[i] );
      elem.style.display = "block";
  }
}

function handleAbout(){
  helperSetNone(["photos", "educ", "cert"]);
  helperSetBlock(["about"]);
}

function handlePhotos(){
  helperSetNone(["about", "educ", "cert"]);
  helperSetBlock(["photos"]);
}

function handleEduc(){
  helperSetNone(["about", "photos", "cert"]);
  helperSetBlock(["educ"]);
}

function handleCert(){
  helperSetNone(["about", "photos", "educ"]);
  helperSetBlock(["cert"]);
}
